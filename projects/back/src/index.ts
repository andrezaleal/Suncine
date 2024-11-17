import Fastify from "fastify"
import { addRouters } from "./infra/routers"

const fastify = Fastify({
  logger: true
}).decorateRequest("user", undefined)

const PORT = 3000

fastify.get("/", () => ({
  hello: "world"
}))

addRouters(fastify)

fastify
  .listen({ port: PORT })
  .then(() => console.info(`Server running on port: ${PORT}`))
  .catch((err) => {
    fastify.log.error(err)
    process.exit(1)
  })
