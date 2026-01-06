import { Request, Response, NextFunction } from "express";
import { successResponseHandler } from "../utils/successResponse";
import { failedResponseHandler } from "../utils/failedResponse";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import { signToken } from "../utils/jwt";
import { UserStatus } from "../utils/userRole";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return failedResponseHandler(
        res,
        400,
        "Email and Password Both Required"
      );
    }

    const user = await User.findOne({
      where: { email: email.toLowerCase().trim() },
    });
    if (!user) {
      return failedResponseHandler(
        res,
        401,
        "Email Id not found please signup before login"
      );
    }

    if (user.status === UserStatus.INACTIVE) {
      return failedResponseHandler(
        res,
        401,
        "Inactive Users are not allowed to login"
      );
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return failedResponseHandler(res, 400, "Incorrect Password");
    }

    const token = signToken({ userId: user.id, role: user.roleId });

    return successResponseHandler(res, 200, "Login Successfull", token);
  } catch (error) {
    next(error);
  }
}
