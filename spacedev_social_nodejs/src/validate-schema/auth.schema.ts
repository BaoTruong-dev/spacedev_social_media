import Joi from "joi";
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const rulesRegex =
  /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`[\]{}|:;"'<>,.?/\\])/;
export const authValidateRegister = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().regex(emailRegex).required(),
  password: Joi.string()
    .min(6)
    .max(32)
    .custom((value, helpers) => {
      if (!rulesRegex.test(value)) {
        return helpers.message(
          "Your password must include uppercase letters, lowercase letters, special characters, and number" as unknown as Joi.LanguageMessages
        );
      }
      return true;
    })
    .required(),
});

export const authValidateLogin = Joi.object({
  email: authValidateRegister.extract("email"),
  password: authValidateRegister.extract("password"),
});

export const authValidateChangePassword = Joi.object({
  uid: Joi.string().required(),
  password: authValidateRegister.extract("password"),
  newPassword: authValidateRegister.extract("password"),
});

export const authValidateForgotPassword = Joi.object({
  email: authValidateRegister.extract("email"),
});
