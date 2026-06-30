import { Router } from "express";
import { validateBody } from "../middlewares/validator";
import { echo, echoSchema } from "../controllers/echo.controller";

export const echoRouter = Router();

echoRouter.post("/", validateBody(echoSchema), echo);