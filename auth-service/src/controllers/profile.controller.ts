import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { User } from "../models/user.model";
import { failedResponseHandler } from "../utils/failedResponse";
import { successResponseHandler } from "../utils/successResponse";
import { UserStatus } from "../utils/userRole";

interface JwtPayload {
  userId: number;
  role: string;
}

export async function profile(req: Request, res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization;
    if (!header) {
      return failedResponseHandler(res, 401, "Please login first");
    }
    if (!header.startsWith("Bearer ")) {
      return failedResponseHandler(res, 401, "Invalid authorization format");
    }

    const token = header.split(" ")[1];

    const decode = (await jwt.verify(token, env.JWT_SECRET)) as JwtPayload;

    const user = await User.findOne({
      where: { id: decode.userId, status: UserStatus.ACTIVE },
      raw: true,
      attributes: ["name", "email", "status", "role"],
    });
    if (!user) {
      return failedResponseHandler(res, 404, "User not found");
    }

    return successResponseHandler(res, 200, `Welcome ${user.name}`, user);
  } catch (error) {
    next(error);
  }
}
