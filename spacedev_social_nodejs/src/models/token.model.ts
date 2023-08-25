import mongoose, { Schema } from "mongoose";

const tokenModel = new Schema({
  uid: {
    type: String,
    require: true,
    default: "",
  },
  refresh_token: {
    type: String,
    require: true,
    default: "",
  },
});

export const TokenModel = mongoose.model("Tokens", tokenModel);
