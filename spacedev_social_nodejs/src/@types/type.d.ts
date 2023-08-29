import { Request } from "express";
export interface RequestCustom<
  Params extends any = {},
  ReqBody extends any = {},
  ReqQuery extends any = {}
> extends Request<Params, any, ReqBody, ReqQuery> {}

export interface RequestAuth<
  Params extends any = {},
  ReqBody extends any = {},
  ReqQuery extends any = {}
> extends RequestCustom<Params, ReqBody, ReqQuery> {
  user: string;
}
