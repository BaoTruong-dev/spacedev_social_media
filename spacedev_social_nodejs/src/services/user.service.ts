import { httpStatus } from "./../constant/httpStatus";
import createHttpError from "http-errors";
import { UserModel } from "./../models/user.model";
import { Inject, Injectable } from "../decorators/DI-IOC.decorator";

export interface UserUpdateInfo {
  name: String;
  date_of_birth: Date;
  avatar: String;
  uid: string;
}
@Injectable
export default class UserService {
  async updateInfo(data: UserUpdateInfo) {
    const { uid, ...rest } = data;
    let result = await UserModel.findOneAndUpdate(
      {
        _id: uid,
      },
      {
        ...rest,
      }
    );
    if (!result) {
      throw createHttpError(httpStatus.badRequest, "User is not found!");
    }
    return result;
  }
}
