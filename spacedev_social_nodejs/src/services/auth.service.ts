import createHttpError from "http-errors";
import { httpStatus } from "../constant/httpStatus";
import { UserModel } from "../models/user.model";
import { generateRandomSalt, hashPassword } from "../utils/crypto";
import { registerMail } from "../utils/mail";
import { Token } from "../utils/jwt";
import { log } from "util";

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

export interface authVerifyEmailType {
  verify_code: string;
  email: authRegisterType["email"];
}

export default class AuthService {
  static async register({ email, password }: authRegisterType) {
    let user = await UserModel.findOne({ email });
    if (user) {
      throw createHttpError(httpStatus.badRequest, "Email is already existed");
    }
    const code = generateRandomSalt();
    const passwordAfterHash = hashPassword(password);
    const linkVerify = `${process.env.BE_URL}/auth/verify-email?verify_code=${code}&&email=${email}`;
    await registerMail({ email, linkVerify });

    return await UserModel.create({
      email,
      password: passwordAfterHash,
      verify_email_code: code,
    });
  }
  static async login({ email, password }: authRegisterType) {
    let passwordAfterHash = hashPassword(password);
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
    user.refresh_token = refresh_token;
    user.save();
    return {
      access_token,
      refresh_token,
    };
  }
  static async changePassword({
    newPassword,
    password,
    uid,
  }: authChangePasswordType) {
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
  static async verifyEmail({ verify_code, email }: authVerifyEmailType) {
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
}
