import { Injectable } from "../decorators/DI-IOC.decorator";

@Injectable
export default class FriendService {
  async searchFriend(_id: string, search: string) {
    if (search) {
    }
  }
}
