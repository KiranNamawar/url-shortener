import { Elysia, redirect } from "elysia";
import api from "./routes/api";
import temp from "./routes/temp";
import prisma from "./config/prisma-client";

const app = new Elysia()
  .use(api)
  .use(temp)
  .get("/", () => "welcome to url shortener")
  .get("/:shortCode", async ({ params: { shortCode } }) => {
    try {
      const url = await prisma.link.findUnique({
        where: {
          shortCode,
        }
      })

      if (!url) {
        return "URL not found";
      }
      return redirect(`https://${url.originalUrl}`);

    } catch (error) {
      return error;
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
