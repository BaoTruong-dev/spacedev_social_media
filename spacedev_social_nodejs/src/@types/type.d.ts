import { Request } from "express";
export interface RequestCustom<
  ReqBody extends any = {},
  ReqQuery extends any = {},
  Params extends any = {}
> extends Request<Params, any, ReqBody, ReqQuery> {}

export interface RequestAuth<
  ReqBody extends any = {},
  ReqQuery extends any = {},
  Params extends any = {}
> extends RequestCustom<ReqBody, ReqQuery, Params> {
  user: string;
}
