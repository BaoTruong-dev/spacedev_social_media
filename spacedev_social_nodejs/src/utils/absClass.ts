import { NextFunction, Request, Response } from "express";

export abstract class BaseMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {}
}
