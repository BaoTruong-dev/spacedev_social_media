import { HttpResponse } from "./../utils/HttpResponse";
import { Response } from "express";
import { RequestAuth, RequestCustom } from "./../@types/type.d";
import { Controllers, Get } from "../decorators/Controller.decorator";
import { Inject } from "../decorators/DI-IOC.decorator";
import FriendService from "../services/friend.service";
import { GuardAll } from "../decorators/Guard.decorator";

@Controllers("/friends")
@GuardAll
export default class FriendController {
  @Inject(FriendService)
  private friendService!: FriendService;
  @Get("/search")
  async searchFriend(req: RequestAuth<any, any, { q: string }>, res: Response) {
    const _id = req.user;
    const { q } = req.query;
    const friendList = this.friendService.searchFriend(_id, q);
    return HttpResponse.success(res, friendList);
  }
}
