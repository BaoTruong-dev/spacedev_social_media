import { Request, Response } from "express";
import { Controllers, Get, Post } from "../decorators/Controller.decorator";
import { Validate } from "../decorators/Validate.decorator";
import {
  default as AuthService,
  authChangePasswordType,
  authLoginType,
  authRegisterType,
  authVerifyEmailType,
} from "../services/auth.service";
import { HttpResponse } from "../utils/HttpResponse";
import {
  userValidateChangePassword,
  userValidateLogin,
  userValidateRegister,
} from "../validate-schema/user.schema";
import { GuardOne } from "../decorators/Guard.decorator";

@Controllers("/auth")
export class AuthController {
  @Post("/register")
  @Validate(userValidateRegister)
  async register(req: Request<any, any, authRegisterType>, res: Response) {
    await AuthService.register(req.body);
    return HttpResponse.created(res);
  }
  @Post("/login")
  @Validate(userValidateLogin)
  async login(req: Request<any, any, authLoginType>, res: Response) {
    let result = await AuthService.login(req.body);
    return HttpResponse.success(res, result, {
      message: "Login successfully",
    });
  }
  @Post("/change-password")
  @GuardOne
  @Validate(userValidateChangePassword)
  async changePassword(
    req: Request<any, any, authChangePasswordType>,
    res: Response
  ) {
    await AuthService.changePassword(req.body);
    return HttpResponse.success(res, undefined, {
      message: "Change password successfully",
    });
  }

  @Get("/verify-email")
  async verifyEmail(
    req: Request<any, any, any, authVerifyEmailType>,
    res: Response
  ) {
    await AuthService.verifyEmail(req.query);
    return HttpResponse.success(res, undefined, {
      message: "Verify your account successfully!",
    });
  }
}
