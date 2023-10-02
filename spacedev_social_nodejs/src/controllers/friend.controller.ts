import { httpStatus } from "./../constant/httpStatus";
import mongoose from "mongoose";
import { validateJoi } from "./../utils/validate";
import { Response } from "express";
import { Controllers, Get, Post } from "../decorators/Controller.decorator";
import { Inject } from "../decorators/DI-IOC.decorator";
import { GuardAll, GuardOne } from "../decorators/Guard.decorator";
import FriendService from "../services/friend.service";
import { RequestAuth } from "./../@types/type.d";
import { HttpResponse } from "./../utils/HttpResponse";
import { friendAddSchema } from "../validate-schema/friend.schema";
import createHttpError from "http-errors";

@Controllers("/friends")
@GuardAll
export default class FriendController {
  @Inject(FriendService)
  private friendService!: FriendService;
  @Get("/search-people")
  async searchFriend(req: RequestAuth<any, { q: string }>, res: Response) {
    const _id = req.user;
    const { q } = req.query;
    if (!q) {
      throw createHttpError(httpStatus.badRequest, "Search key is required");
    }
    const friendList = await this.friendService.searchPeople(_id, q);
    return HttpResponse.success(res, friendList);
  }
  @Post("/add-friend/:receiver")
  async addFriend(
    req: RequestAuth<any, any, { receiver: string }>,
    res: Response
  ) {
    const uid = req.user;
    const { receiver } = req.params;
    await this.friendService.addFriend(uid, receiver);
    return HttpResponse.success(res);
  }
  @Post("/confirm-friend/:receiver")
  async confirmFriend(
    req: RequestAuth<any, any, { receiver: string }>,
    res: Response
  ) {
    const uid = req.user;
    const { receiver } = req.params;
    await this.friendService.confirmFriend(uid, receiver);
    return HttpResponse.success(res);
  }
}
