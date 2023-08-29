import fs from "fs";
import { NextFunction, Response } from "express";
import createHttpError from "http-errors";
import { httpStatus } from "../constant/httpStatus";
import { Controllers, Post } from "../decorators/Controller.decorator";
import { GuardAll, GuardOne } from "../decorators/Guard.decorator";
import { RequestAuth } from "./../@types/type.d";
import { upload } from "./../middlewares/file.middleware";
import { UserModel } from "./../models/user.model";
import { HttpResponse } from "./../utils/HttpResponse";
import path from "path";

@Controllers("/files")
@GuardAll
export default class FileController {
  @Post("/upload-file")
  @GuardOne([upload.single("avatar")])
  async UploadAvatar(req: RequestAuth, res: Response, next: NextFunction) {
    const uid = req.user;
    const user = await UserModel.findOne({ _id: uid });
    if (!user) {
      throw createHttpError(httpStatus.notFound, "User is not found");
    }
    if (user.avatar) {
      fs.unlink(
        path.join(__dirname, "../upload/image/", user.avatar),
        (error) => {
          if (error) throw error;
          console.log("File deleted!");
        }
      );
    }
    const file = req.file?.filename;
    return HttpResponse.success(res, file);
  }
}
