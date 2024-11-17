import Fastify from "fastify"
import { addRouters } from "./infra/routers"
import mongoose from "mongoose"
import { ENV_VAR } from "../env"
import { RunSeed } from "./infra/seed"
import { DB } from "./infra/db"

const fastify = Fastify({
  logger: true
}).decorateRequest("user", undefined)

const PORT = 3000

fastify.get("/", () => ({
  hello: "world"
}))

addRouters(fastify)

async function Start() {
  try {
    await mongoose.connect(
      `mongodb://${ENV_VAR.MONGO.LOGIN}:${ENV_VAR.MONGO.PASS}@${ENV_VAR.MONGO.HOST}:${ENV_VAR.MONGO.PORT}`
    )
    console.info("Mongo connected!")
    await RunSeed(DB(), ENV_VAR)
    await fastify.ready()
    await fastify.listen({ port: PORT })
    console.info(`Server running on port: ${PORT}`)
  } catch (error) {
    console.error(error)
    fastify.log.error(error)
    process.exit(1)
  }
}

Start()
