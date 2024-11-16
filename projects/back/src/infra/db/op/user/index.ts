import type { DbModels } from "../.."
import { findUserByLogin } from "./find-user-by-login"

export function UserOp(MODELS: DbModels) {
  return {
    findUserByLogin(login: string) {
      return findUserByLogin(MODELS, login)
    }
  }
}
