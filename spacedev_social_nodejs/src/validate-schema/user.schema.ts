import Joi from "joi";
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const rulesRegex =
  /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+~`[\]{}|:;"'<>,.?/\\])/;
export const userValidateRegister = Joi.object({
  email: Joi.string().regex(emailRegex).required(),
  password: Joi.string()
    .min(6)
    .max(32)
    .custom((value, helpers) => {
      let name = helpers.state.ancestors[0].name;
      if (value.includes(name)) {
        return helpers.message("Your password's not allowed includes name" as unknown as Joi.LanguageMessages);
      }
      if (!rulesRegex.test(value)) {
        return helpers.message("Your password must include uppercase letters, lowercase letters, special characters, and number" as unknown as Joi.LanguageMessages);
      }
      return true;
    })
    .required(),
});

// export const userValidateLogin = Joi.object({
//   email: userValidateRegister.extract("email"),
//   password: userValidateRegister.extract("password"),
// });

// export const userValidateForgotPassword = Joi.object({
//   email: userValidateRegister.extract("email"),
//   url: userValidateRegister.extract("name"),
// });

// export const userValidateResetPassword = Joi.object({
//   code: userValidateRegister.extract("name"),
//   password: userValidateRegister.extract("password"),
// });
