import { Router } from "express";
import { validateBody } from "../middlewares/validator";
import { createUserController, deleteUserController, getUserController, getUsersController, updateUserController } from "../controllers/user.controller";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";

export const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.post("/", validateBody(createUserSchema), createUserController);
userRouter.get("/:id", getUserController);
userRouter.put("/:id", validateBody(updateUserSchema), updateUserController);
userRouter.delete("/:id", deleteUserController);
