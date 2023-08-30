import mongoose, { Schema } from "mongoose";
export const friendModel = new Schema({
  sender: {
    type: String,
    require: true,
    ref: "Users"
  },
  receiver: {
    type: String,
    require: true,
       ref: "Users"
  },
  confirm: {
    type: Boolean,
    default: false,
  },
});

export const FriendModel = mongoose.model("Friends", friendModel);
