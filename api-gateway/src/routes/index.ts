import { Router } from "express";

import {
  authProxy,
  leaveProxy,
  adminProxy,
  taskProxy,
  issueProxy,
} from "../middlewares/proxy.middleware";

const router = Router();

router.use("/auth", authProxy);
router.use("/leave", leaveProxy);
router.use("/admin", adminProxy);
router.use("/task", taskProxy);
router.use("/issue", issueProxy);

export default router;
