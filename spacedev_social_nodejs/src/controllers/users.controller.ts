import UserService, { userRegisterType } from "./../services/user.service";
import { HttpResponse } from "./../utils/HttpResponse";
import { userValidateRegister } from "./../validate-schema/user.schema";
import { Request, Response } from "express";
import { Controllers, Get, Post } from "../decorators/Controller.decorator";
import { Validate } from "../decorators/Validate.decorator";

@Controllers("/users")
export class UsersController {
  @Post("/register")
  @Validate(userValidateRegister)
  async register(req: Request<any, any, userRegisterType>, res: Response) {
    await UserService.register(req.body);
    return HttpResponse.created(res);
  }
}
