import { Response } from "express";

export function failedResponseHandler(
  res: Response,
  statusCode: number,
  message: string
) {
  return res.status(statusCode).json({
    success: false,
    message,
  });
}
