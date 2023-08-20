import { Response } from "express";
import { httpStatus } from "./../constant/httpStatus";
interface OptionsResponse {
  message?: string;
  code?: number;
}

export class HttpResponse {
  static paginate(res: Response, data: any, options?: OptionsResponse) {
    return res.status(options?.code || httpStatus.success).json({
      status: "success",
      code: options?.code || httpStatus.success,
      message: options?.message || "Get data successfully",
      data,
    });
  }

  static created(res: Response, options?: OptionsResponse) {
    return res.status(options?.code || httpStatus.success).json({
      status: "success",
      code: options?.code || httpStatus.created,
      message: options?.message || "Created successfully",
    });
  }

  static error(res: Response, errors: any, options?: OptionsResponse) {
    return res.status(options?.code || httpStatus.success).json({
      status: "error",
      code: options?.code || httpStatus.badRequest,
      errors,
    });
  }

  static updated(res: Response, options?: OptionsResponse) {
    return res.status(options?.code || httpStatus.success).json({
      status: "success",
      code: options?.code || httpStatus.noContent,
      message: options?.message || "Updated successfully",
    });
  }

  static count(res: Response, count: number, options?: OptionsResponse) {
    return res.status(options?.code || httpStatus.success).json({
      status: "success",
      code: options?.code || httpStatus.success,
      message: options?.message || "Count successfully",
      data: {
        count,
      },
    });
  }

  static detail(res: Response, data: any, options?: OptionsResponse) {
    return res.status(options?.code || httpStatus.success).json({
      status: "success",
      code: options?.code || httpStatus.success,
      message: options?.message || "Get detail successfully",
      data,
    });
  }

  static success(res: Response, data?: any, options?: OptionsResponse) {
    return res.status(options?.code || httpStatus.success).json({
      status: "success",
      code: options?.code || httpStatus.success,
      message: options?.message || "Successfully",
      data,
    });
  }

  static notFound(res: Response, options?: OptionsResponse) {
    return res.status(options?.code || httpStatus.success).json({
      status: "not-found",
      code: options?.code || httpStatus.notFound,
      message: options?.message || "Not found",
    });
  }
}
