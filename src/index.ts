import { createApp } from "./app";
import { env } from "./config/env.config";

const app = createApp();

const server = app.listen(env.PORT, () => {
  console.log(`Server listening on http://localhost:${env.PORT}`);
});

for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, () => {
    console.log(`\n${signal} received, shutting down...`);
    server.close(() => {
      console.log("Server closed.");
      process.exit(0);
    });
  });
}