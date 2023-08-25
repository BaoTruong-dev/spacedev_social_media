import { jwtMiddleware } from "./../middlewares/jwt.middleware";
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
  userValidateChangePassword,
  userValidateForgotPassword,
  userValidateLogin,
  userValidateRegister,
} from "../validate-schema/user.schema";
import { GuardOne } from "../decorators/Guard.decorator";
import { Inject } from "../decorators/DI-IOC.decorator";

@Controllers("/auth")
export class AuthController {
  @Inject(AuthService)
  private authService!: AuthService;

  @Post("/register")
  @Validate(userValidateRegister)
  async register(req: Request<any, any, authRegisterType>, res: Response) {
    await this.authService.register(req.body);
    return HttpResponse.created(res);
  }
  @Post("/login")
  @Validate(userValidateLogin)
  async login(req: Request<any, any, authLoginType>, res: Response) {
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
  async logout(req: Request<any, any, { uid: string }>, res: Response) {
    let { uid } = req.body;
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
  @Validate(userValidateChangePassword)
  async changePassword(
    req: Request<any, any, authChangePasswordType>,
    res: Response
  ) {
    await this.authService.changePassword(req.body);
    return HttpResponse.success(res, undefined, {
      message: "Change password successfully",
    });
  }
  @Post("/forgot-password")
  @Validate(userValidateForgotPassword)
  async forgotPassword(
    req: Request<any, any, authForgotPasswordType>,
    res: Response
  ) {
    await this.authService.forgotPassword(req.body);
    return HttpResponse.success(res, undefined, {
      message: "Check your email to reset your password!",
    });
  }
  @Get("/refresh-token")
  async refreshToken(req: Request, res: Response) {
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
    req: Request<any, any, authResetPasswordType>,
    res: Response
  ) {
    await this.authService.resetPassword(req.body);
    return HttpResponse.success(res, undefined, {
      message: "Reset your password successfully",
    });
  }

  @Get("/verify-email")
  async verifyEmail(
    req: Request<any, any, any, authVerifyEmailType>,
    res: Response
  ) {
    await this.authService.verifyEmail(req.query);
    return HttpResponse.success(res, undefined, {
      message: "Verify your account successfully!",
    });
  }
}
