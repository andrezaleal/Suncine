import type { FastifyReply, FastifyRequest } from "fastify"
import { Auth0JsonWebToken } from "../jwt"
import { ENV_VAR } from "../../../env"
import type { User } from "../../domain/user/type"

export function AuthHandler(req: FastifyRequest, reply: FastifyReply) {
  const token = req.headers.authorization
  if (!token) {
    return reply.status(401).send()
  }
  const { status, payload } = Auth0JsonWebToken().verify<User>(token, ENV_VAR.JWT_TOKEN)
  if (status === "INVALID") {
    return reply.status(401).send()
  }
  req.user = payload
}
