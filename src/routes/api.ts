import Elysia, { t } from "elysia";
import { nanoid } from "nanoid";
import prisma from "../config/prisma-client";

const api = new Elysia({ prefix: "/api" })
    .get("/", () => "this endpoint is for internal use only")
    .post("/shorten", async ({body: { originalUrl }}) => {
        console.log(originalUrl);
        const shortCode = nanoid(7);
        try {
            const url = await prisma.link.create({
                data: {
                    originalUrl,
                    shortCode
                }
            })
            return `https://${process.env.DOMAIN}/${url.shortCode}`;

        } catch (error) {
            return error;
        }
    }, {
        body: t.Object({
            originalUrl: t.String()
        })
    });

export default api;