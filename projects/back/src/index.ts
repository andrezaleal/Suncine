import Fastify from "fastify"
const fastify = Fastify({
  logger: true
})

const PORT = 3000

fastify.get("/", () => ({
  hello: "world"
}))

fastify
  .listen({ port: PORT })
  .then(() => console.info(`Server running on port: ${PORT}`))
  .catch((err) => {
    fastify.log.error(err)
    process.exit(1)
  })
