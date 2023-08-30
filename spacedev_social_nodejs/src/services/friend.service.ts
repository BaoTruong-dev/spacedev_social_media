import { FriendModel } from "./../models/friend.model";
import { UserModel } from "./../models/user.model";
import { Injectable } from "../decorators/DI-IOC.decorator";
import { httpStatus } from "../constant/httpStatus";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { conditionError } from "../utils/checkedError";

@Injectable
export default class FriendService {
  async searchPeople(uid: string, search: string) {
    const friendList = await FriendModel.aggregate([
      {
        $match: {
          $or: [
            {
              sender: uid,
            },
            {
              receiver: uid,
            },
          ],
        },
      },
      {
        $project: {
          sender: 1,
          receiver: 1,
          confirm: 1,
        },
      },
    ]);
    const filterFriendList = friendList.map((e) => {
      if (e.sender.toString() === uid) {
        return {
          id: e.receiver,
          confirm: e.confirm,
        };
      } else {
        return {
          id: e.sender,
          confirm: e.confirm,
        };
      }
    });
    const userList = await UserModel.find({
      verify: true,
      $text: {
        $search: search,
      },
    }).select("_id avatar name");
    const result: any[] = [];
    const isFriend: any[] = [];
    const awaitFriend: any[] = [];
    console.log(filterFriendList);

    userList.forEach((user) => {
      filterFriendList.forEach((e) => {
        if (e.id === user._id.toString() && e.confirm) {
          isFriend.push(user);
        }
        if (e.id === user._id.toString() && !e.confirm) {
          awaitFriend.push(user);
        }
      });
      result.push(user)
    });
    return [...isFriend, ...awaitFriend, ...result];
  }
  async addFriend(sender: string, receiver: string) {
    conditionError(
      !mongoose.isValidObjectId(receiver),
      "Params is not an objectId!"
    );
    conditionError(sender === receiver, "Can not made friend with yourself");
    const userReceiver = await UserModel.findOne({
      _id: receiver,
      verify: true,
    });
    conditionError(
      !userReceiver,
      "User is not existed! or not verify yet!",
      httpStatus.notFound
    );
    const checkIsFriend = await FriendModel.findOne({
      $or: [
        {
          sender,
          receiver,
        },
        {
          sender: receiver,
          receiver: sender,
        },
      ],
    });
    conditionError(
      checkIsFriend,
      "You already made friend!",
      httpStatus.notFound
    );
    return await FriendModel.create({
      sender,
      receiver,
    });
  }
  async confirmFriend(sender: string, receiver: string) {
    conditionError(
      !mongoose.isValidObjectId(receiver),
      "Params is not an objectId!"
    );
    conditionError(sender === receiver, "Can not made friend with yourself");
    const findRequest = await FriendModel.findOne({
      sender: receiver,
      receiver: sender,
    });
    if (!findRequest) {
      throw createHttpError(httpStatus.badRequest, "Params id not found!");
    }
    conditionError(findRequest.confirm, "You already made friend!");
    findRequest.confirm = true;
    findRequest.save();
    return findRequest;
  }
}
