import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { BaseMiddleware } from "../utils/absClass";
import { Token } from "../utils/jwt";

export class JWT extends BaseMiddleware {
  async use(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const access_token = req.headers.authorization?.split(" ")[1] as string;
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
