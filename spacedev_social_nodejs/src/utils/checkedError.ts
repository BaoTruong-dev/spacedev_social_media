import createHttpError from "http-errors";
import { httpStatus } from "../constant/httpStatus";

export const conditionError = <T>(
  check: T,
  message?: string,
  status?: number
) => {
  if (check) {
    throw createHttpError(
      status || httpStatus.badRequest,
      message ? message : "Error"
    );
  }
};
