import { Request, Response, NextFunction } from "express";
import { Token } from "../utils/jwt";

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const access_token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    let { uid } = Token.verifyToken(
      access_token,
      process.env.ACCESS_TOKEN_SECRET
    );
    req.uid = uid;
    next();
  } catch (error) {
    next(error);
  }
};
