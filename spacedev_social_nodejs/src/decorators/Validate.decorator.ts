import { NextFunction, Request, Response } from "express";
import { VALIDATE_KEY } from "../constant/metadataKey";

export const Validate = (schema: any) => {
  return (target: any, propertyKey: string, descriptor: any) => {
    Reflect.defineMetadata(
      VALIDATE_KEY + propertyKey,
      async (req: Request, res: Response, next: NextFunction) => {
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
      },
      target.constructor
    );
  };
};
