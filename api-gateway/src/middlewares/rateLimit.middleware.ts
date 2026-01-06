import { Request, Response, NextFunction } from "express";
import { redis } from "../config/redis";

export async function rateLimit(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const key = `rate: ${req.ip}`;
  const count = await redis.incr(key);

  if (count === 1) {
    await redis.expire(key, 60);
  }

  if (count > 100) {
    return res.status(429).json({ message: "Too many requests" });
  }

  next();
}
