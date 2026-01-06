import Jwt from "jsonwebtoken";
import { env } from "../config/env";

export function signToken(payload: object) {
  return Jwt.sign(payload, env.JWT_SECRET);
}
