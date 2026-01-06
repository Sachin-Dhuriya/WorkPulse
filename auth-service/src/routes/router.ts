import { Router } from "express";
import { signup } from "../controllers/signup.controller";
import { login } from "../controllers/login.controller";
import { profile } from "../controllers/profile.controller";
const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", profile)

export default router;
