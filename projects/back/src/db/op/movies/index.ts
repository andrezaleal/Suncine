import type { DbModels } from "../.."
import type { TmdbMovie } from "../../../tmdb/type"
import { findUserLikes } from "./find-likes"
import { findOrCreateByTmdbIds } from "./find-or-create-by-tmdb-ids"
import { findUserLikesWithMovieId } from "./find-user-likes"

export function MoviesOp(MODEL: DbModels) {
  return {
    findOrCreateByTmdbIds(tmdb_movies: TmdbMovie[]) {
      return findOrCreateByTmdbIds(MODEL, tmdb_movies)
    },
    findUserLikes(user_id: string) {
      return findUserLikes(MODEL, user_id)
    },
    findUserLikesWithMovieId(user_id: string, tmdb_ids: number[]) {
      return findUserLikesWithMovieId(MODEL, user_id, tmdb_ids)
    }
  }
}