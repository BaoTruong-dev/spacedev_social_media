import { TokenModel } from "./../models/token.model";
import createHttpError from "http-errors";
import { client } from "../config/redis.config";
import { httpStatus } from "../constant/httpStatus";
import { Injectable } from "../decorators/DI-IOC.decorator";
import { UserModel } from "../models/user.model";
import { generateRandomSalt, hashPassword } from "../utils/crypto";
import { Token } from "../utils/jwt";
import { registerMail, resetPasswordMail } from "../utils/mail";

export interface authRegisterType {
  email: string;
  password: string;
}

export interface authLoginType extends authRegisterType {}

export interface authChangePasswordType {
  uid: string;
  password: authRegisterType["password"];
  newPassword: string;
}

export interface authForgotPasswordType {
  email: authRegisterType["email"];
}

export interface authVerifyEmailType {
  email: authRegisterType["email"];
  verify_code: string;
}

export interface authLogoutType {
  uid: string;
  refresh_token: string;
}

export interface authResetPasswordType {
  email: authRegisterType["email"];
  password_code: string;
  newPassword: string;
}
@Injectable
export default class AuthService {
  async register({ email, password }: authRegisterType) {
    let user = await UserModel.findOne({ email });
    if (user) {
      throw createHttpError(httpStatus.badRequest, "Email is already existed");
    }
    const code = generateRandomSalt();
    const passwordAfterHash = hashPassword(password);
    const link = `${process.env.BE_URL}/auth/verify-email?verify_code=${code}&&email=${email}`;
    await registerMail({ email, link });

    return await UserModel.create({
      email,
      password: passwordAfterHash,
      verify_email_code: code,
    });
  }
  async login({ email, password }: authRegisterType) {
    let passwordAfterHash = hashPassword(password);
    console.log(passwordAfterHash);
    let user = await UserModel.findOne({
      email,
      password: passwordAfterHash,
    });
    if (!user) {
      throw createHttpError(
        httpStatus.badRequest,
        "Email or password is wrong"
      );
    }
    if (!user.verify) {
      throw createHttpError(
        httpStatus.badRequest,
        "Please verify your account through your email before login"
      );
    }
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
    if (!user) {
      throw createHttpError(httpStatus.badRequest, "Email is not existed!");
    }
    const code = generateRandomSalt();
    const link = `${process.env.FE_URL}/auth/reset-password?password_code=${code}&&email=${email}`;
    client.setEx(email, 60, code);
    return await resetPasswordMail({ email, link });
  }
  async changePassword({ newPassword, password, uid }: authChangePasswordType) {
    const passwordAfterHash = hashPassword(password);
    const newPasswordAfterHash = hashPassword(newPassword);
    const user = await UserModel.findOneAndUpdate(
      { _id: uid, password: passwordAfterHash },
      {
        password: newPasswordAfterHash,
      }
    );

    if (!user) {
      throw createHttpError(httpStatus.badRequest, "Old password is wrong");
    }
    return user;
  }
  async verifyEmail({ verify_code, email }: authVerifyEmailType) {
    let user = await UserModel.findOne({ email });
    if (!user) {
      throw createHttpError(httpStatus.notFound, "User is not found!");
    }
    if (!(verify_code === user.verify_email_code)) {
      throw createHttpError(httpStatus.badRequest, "Code is wrong!");
    }
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
    if (!(codeInCatch === password_code)) {
      throw createHttpError(httpStatus.badRequest, "Code or email is wrong!");
    }
    const hashNewPassword = hashPassword(newPassword);
    await client.del(email);
    return await UserModel.findOneAndUpdate(
      { email },
      { password: hashNewPassword }
    );
  }
}
