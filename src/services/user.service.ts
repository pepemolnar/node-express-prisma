import { capitalizeWords, isValidEmail } from "../helpers/string.helper";
import { HttpError } from "../middlewares/errorHandler";
import { create, getAll, getBy, getById, softDelete, update, User } from "../models/user.model";
import { getUserFilters, userCreate } from "../types/user.types";

export async function getAllUsers(): Promise<User[]> {
  return getAll();
}

export async function getUsers(filters: getUserFilters): Promise<User[]> {
  return getBy(filters);
}

export async function getUser(id: string): Promise<User | null> {
  const user = getById(id);

  if (!user) throw new HttpError(404, "User not found");

  return user
}

export async function createUser(data: userCreate) {
  if (!isValidEmail(data.email)) throw new HttpError(401, "Email is invalid!");
  if (data.name) data.name = capitalizeWords(data.name)

  return create(data);
}

export async function updateUser(id: string, data: userCreate) {
  return update(id, data);
}

export async function deleteUser(id: string) {
  return softDelete(id);
}