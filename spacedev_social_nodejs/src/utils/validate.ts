import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export const validateJoi = (schema: Schema<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(
        { ...req.body, ...req.query },
        {
          abortEarly: false,
        }
      );
      next();
    } catch (err) {
      next(err);
    }
  };
};
