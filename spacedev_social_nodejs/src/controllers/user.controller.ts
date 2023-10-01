import { Response } from "express";
import { Controllers, Patch } from "../decorators/Controller.decorator";
import { Inject } from "../decorators/DI-IOC.decorator";
import { GuardAll, GuardOne } from "../decorators/Guard.decorator";
import UserService, { UserUpdateInfo } from "../services/user.service";
import { validateJoi } from "../utils/validate";
import { userUpdateSchema } from "../validate-schema/user.schema";
import { RequestAuth } from "./../@types/type.d";
import { HttpResponse } from "./../utils/HttpResponse";
@Controllers("/users")
@GuardAll
export default class UserController {
  @Inject(UserService)
  private userService!: UserService;
  @Patch("/update-info")
  @GuardOne([validateJoi(userUpdateSchema)])
  async updateInfo(req: RequestAuth<UserUpdateInfo>, res: Response) {
    await this.userService.updateInfo({ ...req.body, uid: req.user });
    return HttpResponse.updated(res);
  }

}
