import Joi from "joi";

export const signupValidator = Joi.object({
  name: Joi.string().min(1).max(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(14).required(),
});
