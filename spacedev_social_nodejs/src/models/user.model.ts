import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      index: "text",
    },
    cover: {
      type: String,
      default: null,
    },
    nickName: String,
    avatar: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    date_of_birth: {
      type: Date,
      default: null,
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
    historyChangePassword: [
      {
        password: String,
        date: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const userSchemaQl = `
  type User{
    name: String
    avatar: String
    cover: String
    nickName: String
    
  }
`;

export const UserModel = mongoose.model("Users", userSchema);
