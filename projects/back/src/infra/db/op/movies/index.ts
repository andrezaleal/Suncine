import type { DbModels } from "../.."
import type { TmdbMovie } from "../../../tmdb/type"
import { findUserLikes } from "./find-likes"
import { findOrCreateByTmdbIds } from "./find-or-create-by-tmdb-ids"
import { findUserLikesWithMovieId } from "./find-user-likes"
import { like } from "./like"
import { unlike } from "./unlike"

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
    },
    like(user_id: string, tmdb_id: number) {
      return like(MODEL, user_id, tmdb_id)
    },
    unlike(user_id: string, tmdb_id: number) {
      return unlike(MODEL, user_id, tmdb_id)
    }
  }
}
