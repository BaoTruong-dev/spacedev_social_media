import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
       default: 'null',
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
      default: null,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("Users", userSchema);
