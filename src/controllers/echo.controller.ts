import type { Request, Response } from "express";
import { z } from "zod";

export const echoSchema = z.object({ name: z.string().min(1) });

export function echo(req: Request, res: Response) {
  res.json({ youSent: req.body });
}