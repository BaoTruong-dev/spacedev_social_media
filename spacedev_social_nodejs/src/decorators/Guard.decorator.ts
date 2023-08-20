import { Response, Request, NextFunction } from "express";
import "reflect-metadata";
import { GUARD_ONE_KEY } from "../constant/metadataKey";
import { Token } from "../utils/jwt";

export function GuardOne(target: any, propertyKey: string, descriptor: any) {
  Reflect.defineMetadata(
    GUARD_ONE_KEY + propertyKey,
    async (req: Request, res: Response, next: NextFunction) => {
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
    },
    target.constructor
  );
}
