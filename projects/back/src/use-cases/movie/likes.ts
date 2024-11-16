import type { DbContract } from "../../infra/db"
import type { MovieInApp } from "../../domain/movie/type"

export async function likesUseCase(DB: DbContract, user_id: string): Promise<MovieInApp[]> {
  const a = await DB.OP.MOVIE.findUserLikes(user_id)
  return a.map((m) => ({
    ...m,
    user_liked: true,
    backdrop_path: m.tmdb_obj.backdrop_path,
    poster_path: m.tmdb_obj.poster_path,
    title: m.tmdb_obj.title,
    original_title: m.tmdb_obj.original_title
  }))
}
