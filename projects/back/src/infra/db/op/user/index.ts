import type { DbModels } from "../.."
import { fetchById } from "./fetch-by-id"
import { fetchByLogin } from "./fetch-by-login"

export function UserOp(MODELS: DbModels) {
  return {
    fetchById(id: string) {
      return fetchById(MODELS, id)
    },
    fetchByLogin(login: string) {
      return fetchByLogin(MODELS, login)
    }
  }
}
