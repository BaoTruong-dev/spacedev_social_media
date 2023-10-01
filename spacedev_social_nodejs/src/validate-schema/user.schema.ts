import Joi from "joi";
export const userUpdateSchema = Joi.object({
  name: Joi.string(),
  date_of_birth: Joi.date(),
  avatar: Joi.string(),
});
