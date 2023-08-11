import { Response } from "express";

class HttpResponse {

  static success(res: Response, status: number, message: string, data: object) {
    return res.status(status).json({
        message,
        data
    })
  }
   static error
   (res: Response, status: number, error: object | string) {
    return res.status(status).json({
        error
    })
  }
}

export default HttpResponse;
