import createHttpError from "http-errors";
import { httpStatus } from "../constant/httpStatus";
import { UserModel } from "../models/user.model";
import { registerMail } from "../utils/mail";

export interface userRegisterType {
  email: string;
  password: string;
}

export default class UserService {
  static async register({ email, password }: userRegisterType) {
    let result = await UserModel.findOne({ email });
    if (result?.email) {
      registerMail({ email: "haha", otp: "hihi" });
      throw createHttpError(httpStatus.badRequest, "Email is already existed");
    }

    return await UserModel.create({ email, password });
  }
}
