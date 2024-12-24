import Elysia from "elysia";
import prisma from "../config/prisma-client";

const temp = new Elysia({ prefix: "/temp" })
    .get("/", () => "this is a temporary endpoint")
    .get("/list", () => {
        const urls = prisma.link.findMany();
        return urls;
    })


export default temp;