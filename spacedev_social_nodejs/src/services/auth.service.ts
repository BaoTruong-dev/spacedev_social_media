import { TokenModel } from "./../models/token.model";
import createHttpError from "http-errors";
import { client } from "../config/redis.config";
import { httpStatus } from "../constant/httpStatus";
import { Injectable } from "../decorators/DI-IOC.decorator";
import { UserModel } from "../models/user.model";
import { generateRandomSalt, hashPassword } from "../utils/crypto";
import { Token } from "../utils/jwt";
import { registerMail, resetPasswordMail } from "../utils/mail";
import { addMonths } from "../utils/date";
import { conditionError } from "../utils/checkedError";

export interface authRegisterType {
  email: string;
  password: string;
  name: string
}

export interface authLoginType extends authRegisterType {}

export interface authChangePasswordType {
  uid: string;
  password: string;
  newPassword: string;
}

export interface authForgotPasswordType {
  email: string;
}

export interface authVerifyEmailType {
  email: string;
  verify_code: string;
}

export interface authLogoutType {
  uid: string;
  refresh_token: string;
}

export interface authResetPasswordType {
  email: string;
  password_code: string;
  newPassword: string;
}
@Injectable
export default class AuthService {
  async register({ email, password, name }: authRegisterType) {
    let user = await UserModel.findOne({ email });
    conditionError(user, "Email is already existed");

    const code = generateRandomSalt();
    const passwordAfterHash = hashPassword(password);
    const link = `${process.env.BE_URL}/auth/verify-email?verify_code=${code}&&email=${email}`;
    await registerMail({ email, link });

    return await UserModel.create({
      email,
      password: passwordAfterHash,
      name,
      verify_email_code: code,
    });
  }
  async login({ email, password }: authRegisterType) {
    let passwordAfterHash = hashPassword(password);

    let user = await UserModel.findOne({
      email,
      password: passwordAfterHash,
    });
    if (!user) {
      throw createHttpError(httpStatus.notFound, "Email or password is wrong");
    }
    conditionError(
      !user.verify,
      "Please verify your account through your email before login"
    );
    const access_token = Token.accessToken({ uid: user._id });
    const refresh_token = Token.refreshToken({ uid: user._id });
    await TokenModel.create({
      uid: user._id,
      refresh_token,
    });
    return {
      access_token,
      refresh_token,
    };
  }
  async logout({ uid, refresh_token }: authLogoutType) {
    return await TokenModel.deleteOne({
      uid,
      refresh_token,
    });
  }
  async forgotPassword({ email }: authForgotPasswordType) {
    let user = await UserModel.findOne({
      email,
    });
    conditionError(!user, "Email is not existed!");
    const keyExpireIn = await client.ttl(email);
    conditionError(
      keyExpireIn > 0,
      `Please send mail again after ${keyExpireIn}s`,
      httpStatus.toManyRequests
    );
    const code = generateRandomSalt();
    const link = `${process.env.FE_URL}/auth/reset-password?password_code=${code}&&email=${email}`;
    client.setEx(email, 60, code);
    return await resetPasswordMail({ email, link });
  }
  async changePassword({ newPassword, password, uid }: authChangePasswordType) {
    const passwordAfterHash = hashPassword(password);
    const newPasswordAfterHash = hashPassword(newPassword);
    conditionError(
      passwordAfterHash === newPasswordAfterHash,
      "New password is not same as old password"
    );

    const user = await UserModel.findOne({
      _id: uid,
      password: passwordAfterHash,
    });
    conditionError(!user, "Old password is wrong");
    if (user) {
      user.historyChangePassword.forEach((e) => {
        const date = e.date as Date;
        const currentDate = new Date().getTime();

        if (
          e.password === newPasswordAfterHash &&
          currentDate - date.getTime() <= 0
        ) {
          throw createHttpError(
            httpStatus.badRequest,
            "New password is not same as password you changed within 6 months!"
          );
        }
      });
      user.historyChangePassword.push({
        password: newPasswordAfterHash,
        date: addMonths(new Date(), 6),
      });
      user.password = newPasswordAfterHash;
      user.save();
      return user;
    }
  }
  async verifyEmail({ verify_code, email }: authVerifyEmailType) {
    let user = await UserModel.findOne({ email });
    if (!user) {
      throw createHttpError(httpStatus.notFound, "User is not found!");
    }
    conditionError(!(verify_code === user.verify_email_code), "Code is wrong!");

    user.verify = true;
    user.verify_email_code = undefined;
    await user.save();
  }
  async refreshToken(refresh_token: string) {
    const { uid } = await Token.verifyToken(
      refresh_token,
      process.env.REFRESH_TOKEN_SECRET as string
    );
    let token = await TokenModel.findOne({
      uid,
      refresh_token,
    });
    if (!token) {
      throw createHttpError(httpStatus.badRequest, "Refresh Token is wrong!");
    }
    const new_access_token = Token.accessToken({ uid });
    const new_refresh_token = Token.refreshToken({ uid });
    token.refresh_token = new_refresh_token;
    token.save();
    return {
      new_access_token,
      new_refresh_token,
    };
  }
  async resetPassword({
    password_code,
    email,
    newPassword,
  }: authResetPasswordType) {
    let codeInCatch = await client.get(email);
    conditionError(!(codeInCatch === password_code), "Code or email is wrong!");
    const hashNewPassword = hashPassword(newPassword);
    await client.del(email);
    return await UserModel.findOneAndUpdate(
      { email },
      { password: hashNewPassword }
    );
  }
}
