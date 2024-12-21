import { Elysia } from "elysia";
import api from "./routes/api";

const app = new Elysia()
  .use(api)
  .get("/", () => "welcome to url shortener")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
