import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { Inject, Injectable } from "../decorators/DI-IOC.decorator";
import AuthService from "../services/auth.service";
import { BaseMiddleware } from "../utils/absClass";
import { Token } from "../utils/jwt";

class JWTMiddleware extends BaseMiddleware {
  async accessToken(
    req: Request<
      ParamsDictionary,
      any,
      {
        uid?: string;
      },
      ParsedQs,
      Record<string, any>
    >,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const access_token = req.cookies.access_token;
      const verifyAccessToken = await Token.verifyToken(
        access_token,
        process.env.ACCESS_TOKEN_SECRET as string
      );
      req.body.uid = verifyAccessToken.uid;
      next();
    } catch (error) {
      next(error);
    }
  }
}

export const jwtMiddleware = new JWTMiddleware();
