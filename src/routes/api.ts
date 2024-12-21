import Elysia from "elysia";

const api = new Elysia({ prefix: "/api" })
    .get("/", () => "this endpoint is for internal use only")

export default api;