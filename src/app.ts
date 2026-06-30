import express from "express";
import { env } from "./config/env.config";
import { router } from "./routes/index";
import { errorHandler } from "./middlewares/errorHandler";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/", (_req, res) => {
    res.send(env.GREETING);
  });

  app.use(router); // all feature routes

  app.use(errorHandler); // must be last
  return app;
}