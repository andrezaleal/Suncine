import type { DbModels } from ".."
import { MoviesOp } from "./movies"

export function DbOp(MODEL: DbModels) {
  return {
    MOVIE: MoviesOp(MODEL)
  }
}
