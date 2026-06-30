import { prisma } from "../db/prisma";
import type { Prisma, User } from "../generated/prisma/client";

export type { User };

export function getAll(): Promise<User[]> {
  return prisma.user.findMany({ where: { isDeleted: false } });
};

export function getById(id: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
};

export function getBy(filters: Prisma.UserWhereInput): Promise<User[]> {
  if (!filters.isDeleted) filters.isDeleted = false

  return prisma.user.findMany({ where: filters });
};

export function create(data: Prisma.UserCreateInput): Promise<User> {
  return prisma.user.create({ data });
};

export async function update(
  id: string,
  data: Prisma.UserUpdateInput,
): Promise<User | null> {
  const user = await prisma.user.update({ where: { id }, data });
  if (!user) return null;
  return user;
};

export async function softDelete(id: string): Promise<User | null> {
  const user = await update(id, { isDeleted: true });
  return user;
};

export async function remove(id: string): Promise<boolean> {
  const { count } = await prisma.user.deleteMany({ where: { id } });
  return count > 0;
};