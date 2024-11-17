import type { FastifyReply, FastifyRequest } from "fastify"
import { mostTrendedUseCase } from "../../use-cases/movie/most-trended"
import { TmdbApi } from "../tmdb"
import { ENV_VAR } from "../../../env"

const MOST_TRENDED = {
  method: "GET",
  url: "/most-trended",
  handler: async (_req: FastifyRequest, reply: FastifyReply) => {
    try {
      const payload = await mostTrendedUseCase(TmdbApi(ENV_VAR.TMDB_TOKEN))
      return reply.status(200).send(payload)
    } catch (error) {
      console.error(error)
      return reply.status(500).send()
    }
  }
}

export const MOVIE_ROUTERS = [MOST_TRENDED]
