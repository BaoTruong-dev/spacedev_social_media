import { Response } from "express";
import { Controllers, Patch } from "../decorators/Controller.decorator";
import { Inject } from "../decorators/DI-IOC.decorator";
import { GuardOne } from "../decorators/Guard.decorator";
import { upload } from "../middlewares/file.middleware";
import UserService from "../services/user.service";
import { validateJoi } from "../utils/validate";
import { userUpdateSchema } from "../validate-schema/user.schema";
import { RequestCustom } from "./../@types/type.d";
@Controllers("/users")
// @GuardAll
export default class UserController {
  @Inject(UserService)
  private userService!: UserService;
  @Patch("/update-info")
  @GuardOne([upload.array("avatar"), validateJoi(userUpdateSchema)])
  async updateInfo(req: RequestCustom<any>, res: Response) {
    console.log(req.body, req.file);
    return res.json({
      message: "ok",
    });
  }
}
