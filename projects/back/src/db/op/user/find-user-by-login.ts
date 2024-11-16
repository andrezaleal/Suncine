import type { DbModels } from "../.."

export async function findUserByLogin(MODELS: DbModels, login: string) {
  const user = await MODELS.USER.findOne({
    login
  })
  if (!user) return
  return { id: user.id, login: user.login, password: user.password, name: user.name }
}
