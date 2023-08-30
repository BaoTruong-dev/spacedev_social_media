import Joi from "joi";
import { validateIsObjectId } from "../utils/validate";

export const friendAddSchema = Joi.object({
  id: Joi.string().required().custom(validateIsObjectId),
});
