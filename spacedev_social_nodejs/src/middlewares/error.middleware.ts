import { NextFunction, Request, Response } from "express";
import { httpStatus } from "../constant/httpStatus";
import HttpResponse from "../utils/HttpResponse";
import createHttpError from "http-errors";


export const NotMatchedRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(createHttpError(httpStatus.notFound, 'Route is not found'));
};
export const handleCatchError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return HttpResponse.error(res, error.status || 500, error.message || error);
};
