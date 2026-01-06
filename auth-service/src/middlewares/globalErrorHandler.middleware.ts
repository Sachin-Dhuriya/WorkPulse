import { Request, Response } from "express";

export function globalErrorHandler(err: any, req: Request, res: Response) {
  console.error(err);
  return res.status(500).json({
    success: false,
    message: "Internal Server Error..!!!",
  });
}
