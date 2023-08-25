import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
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
    verify_email_code: {
      type: String,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("Users", userSchema);
