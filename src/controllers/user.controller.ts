import type { Request, Response } from "express";
import { createUser, deleteUser, getAllUsers, getUser, getUsers, updateUser } from "../services/user.service";

export async function getUsersController(req: Request, res: Response) {
  const filters = req.query;

  if (filters) return res.json(await getUsers(filters))

  res.json(await getAllUsers());
}

export async function getUserController(req: Request<{ id: string }>, res: Response) {
  const user = await getUser(req.params.id);
  res.json(user);
}

export async function createUserController(req: Request, res: Response) {
  const user = await createUser(req.body);
  res.status(201).json(user);
}

export async function updateUserController(req: Request<{ id: string }>, res: Response) {
  const user = await updateUser(req.params.id, req.body);
  res.json(user);
}

export async function deleteUserController(req: Request<{ id: string }>, res: Response) {
  const user = await deleteUser(req.params.id);
  res.status(204).send();
}
