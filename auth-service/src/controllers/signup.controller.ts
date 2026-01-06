import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import { userRoles, UserStatus } from "../utils/userRole";
import { successResponseHandler } from "../utils/successResponse";
import { failedResponseHandler } from "../utils/failedResponse";
import { signupValidator } from "../validations/signup.validator";

export async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    let { error } = signupValidator.validate(req.body, { abortEarly: false });
    const validationErrorMessage = String(error?.details[0].message);
    if (error) {
      return failedResponseHandler(res, 400, validationErrorMessage);
    }

    const { name, password } = req.body;
    const email: string = req.body.email.toLowerCase().trim();

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return failedResponseHandler(res, 400, "User already exists");
    }

    const hashPassword: string = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      roleId: userRoles.EMPLOYEE,
      status: UserStatus.ACTIVE,
    });

    return successResponseHandler(res, 201, "User created successfully", {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      status: newUser.status,
    });
  } catch (error) {
    next(error);
  }
}
