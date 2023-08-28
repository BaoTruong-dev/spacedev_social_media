import { Request } from "express";
export interface RequestCustom<
  Params extends any = {},
  ReqBody extends any = {},
  ReqQuery extends any = {}
> extends Request<Params, any, ReqBody, ReqQuery> {}
