import type { FastifyInstance } from "fastify"
import { MOVIE_ROUTERS } from "./movies"

export function addRouters(APP: FastifyInstance) {
  const ROUTERS = [...MOVIE_ROUTERS]
  for (const current of ROUTERS) {
    APP.route(current)
  }
}
