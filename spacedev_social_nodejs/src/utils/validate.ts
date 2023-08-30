import { NextFunction, Request, Response } from "express";
import { CustomValidator, LanguageMessages, Schema } from "joi";
import mongoose, { Types } from "mongoose";

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

export const validateIsObjectId: CustomValidator = (value, helper) => {
  if (!mongoose.isValidObjectId(value)) {
    helper.message("ObjectId is invalid!" as unknown as LanguageMessages);
  }
};
