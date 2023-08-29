import { RequestAuth } from "./../@types/type.d";
import { RequestCustom } from "../@types/type";
import { jwtMiddleware } from "../middlewares/jwt.middleware";
import { Request, Response } from "express";
import { Controllers, Get, Post } from "../decorators/Controller.decorator";
import { Validate } from "../decorators/Validate.decorator";
import {
  default as AuthService,
  authChangePasswordType,
  authLoginType,
  authRegisterType,
  authVerifyEmailType,
  authForgotPasswordType,
  authResetPasswordType,
} from "../services/auth.service";
import { HttpResponse } from "../utils/HttpResponse";
import {
  authValidateChangePassword,
  authValidateForgotPassword,
  authValidateLogin,
  authValidateRegister,
} from "../validate-schema/auth.schema";
import { GuardOne } from "../decorators/Guard.decorator";
import { Inject } from "../decorators/DI-IOC.decorator";

@Controllers("/auth")
export default class AuthController {
  @Inject(AuthService)
  private authService!: AuthService;

  @Post("/register")
  @Validate(authValidateRegister)
  async register(req: RequestCustom<any, authRegisterType>, res: Response) {
    await this.authService.register(req.body);
    return HttpResponse.created(res);
  }
  @Post("/login")
  @Validate(authValidateLogin)
  async login(req: RequestCustom<any, authLoginType>, res: Response) {
    let { refresh_token, access_token } = await this.authService.login(
      req.body
    );
    res.cookie("access_token", access_token);
    res.cookie("refresh_token", refresh_token);
    return HttpResponse.success(res, undefined, {
      message: "Login successfully",
    });
  }

  @Get("/logout")
  @GuardOne([jwtMiddleware.accessToken])
  async logout(req: RequestAuth, res: Response) {
    let uid = req.user;
    let { refresh_token } = req.cookies;
    await this.authService.logout({ uid, refresh_token });
    for (const cookieName in req.cookies) {
      res.clearCookie(cookieName);
    }
    return HttpResponse.success(res, undefined, {
      message: "Logout successfully",
    });
  }
  @Post("/change-password")
  @GuardOne([jwtMiddleware.accessToken])
  @Validate(authValidateChangePassword)
  async changePassword(
    req: RequestAuth<any, any, authChangePasswordType>,
    res: Response
  ) {
    await this.authService.changePassword({ ...req.body, uid: req.user });
    return HttpResponse.success(res, undefined, {
      message: "Change password successfully",
    });
  }
  @Post("/forgot-password")
  @Validate(authValidateForgotPassword)
  async forgotPassword(
    req: RequestCustom<any, any, authForgotPasswordType>,
    res: Response
  ) {
    await this.authService.forgotPassword(req.body);
    return HttpResponse.success(res, undefined, {
      message: "Check your email to reset your password!",
    });
  }
  @Get("/refresh-token")
  async refreshToken(req: RequestCustom, res: Response) {
    const refresh_token = req.cookies.refresh_token;
    let { new_access_token, new_refresh_token } =
      await this.authService.refreshToken(refresh_token);
    res.cookie("access_token", new_access_token);
    res.cookie("refresh_token", new_refresh_token);
    return HttpResponse.success(res, undefined, {
      message: "Refresh Token successfully",
    });
  }
  @Post("/reset-password")
  async resetPassword(
    req: RequestCustom<any, authResetPasswordType>,
    res: Response
  ) {
    await this.authService.resetPassword(req.body);
    return HttpResponse.success(res, undefined, {
      message: "Reset your password successfully",
    });
  }
  @Get("/verify-email")
  async verifyEmail(
    req: RequestCustom<any, any, authVerifyEmailType>,
    res: Response
  ) {
    await this.authService.verifyEmail(req.query);
    return HttpResponse.success(res, undefined, {
      message: "Verify your account successfully!",
    });
  }
}
