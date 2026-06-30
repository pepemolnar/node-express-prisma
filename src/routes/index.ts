import { Router } from "express";
import { healthRouter } from "./health.routes";
import { echoRouter } from "./echo.routes";
import { userRouter } from "./user.routes";

export const router = Router();

router.use("/health", healthRouter);
router.use("/echo", echoRouter);
router.use("/users", userRouter);