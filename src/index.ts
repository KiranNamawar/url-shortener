import { Elysia, redirect } from "elysia";
import api from "./routes/api";
import temp from "./routes/temp";
import prisma from "./util/prisma-client";

const app = new Elysia()
  .use(api)
  .use(temp)
  .get("/", () => "welcome to url shortener")
  .get("/:shortCode", async ({ params: { shortCode } }) => {
    try {
      const url = await prisma.link.update({
        where: {
          shortCode,
        },
        data: {
          clickCount: {
            increment: 1,
          },
        },
      });
      
      if (!url) return "URL not found";

      const visit = await prisma.linkVisit.create({
        data: {
            linkId: url.id
        }
      })
      
      return redirect(`https://${url.originalUrl}`);

    } catch (error) {
      return error;
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
