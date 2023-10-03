import { hashPassword } from "./../../../spacedev_social_nodejs/src/utils/crypto";
import * as yup from "yup";
// eslint-disable-next-line no-useless-escape
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex =
  /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`[\]{}|:;"'<>,.?/\\])/;
export const userSchema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .matches(emailRegex, "Email is invalid"),
  password: yup
    .string()
    .required("This field is required")
    .matches(
      passwordRegex,
      "Your password must include uppercase letters, lowercase letters, special characters, and number"
    ),
});

export const userResetPasswordSchema = yup.object({
  password: userSchema.fields.password,
  confirmPassword: yup
    .string()
    .required("This field is required")
    .test("confirm-password", "Confirm password is wrong", function (value) {
      const password = this.parent.password;
      if (password !== value) {
        return false;
      }
      return true;
    }),
});
