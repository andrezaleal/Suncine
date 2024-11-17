import type { TmdbMovie } from "../../infra/tmdb/type"
import { TMDB_BACKDROP_IMG, TMDB_POSTER_IMG } from "./const"
import type { Movie } from "./type"

export function isTmdbMovieDto(movie: unknown): boolean {
  return (
    movie instanceof Object &&
    "adult" in movie &&
    "backdrop_path" in movie &&
    "id" in movie &&
    "title" in movie &&
    "original_language" in movie &&
    "original_title" in movie &&
    "overview" in movie &&
    "poster_path" in movie &&
    "media_type" in movie &&
    "genre_ids" in movie &&
    "popularity" in movie &&
    "release_date" in movie &&
    "video" in movie &&
    "vote_average" in movie &&
    "vote_count" in movie
  )
}

export function get10MostPopular(movies: TmdbMovie[]): TmdbMovie[] {
  return movies.slice(0, 10)
}

export function formatToResponse(movies: TmdbMovie[]): Movie[] {
  return movies.map((m) => {
    const {
      adult,
      original_language,
      overview,
      media_type,
      genre_ids,
      video,
      vote_average,
      vote_count,
      ...rest
    } = m
    return {
      ...rest,
      backdrop_path: formatBackdropImg(rest.backdrop_path),
      poster_path: formatPosterImg(rest.poster_path)
    }
  })
}

export function formatBackdropImg(path: string) {
  return `${TMDB_BACKDROP_IMG}/${path}`
}

export function formatPosterImg(path: string) {
  return `${TMDB_POSTER_IMG}/${path}`
}
