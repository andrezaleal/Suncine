import type { TmdbMovie } from "../tmdb/type"
import type { Movie } from "./type"

const TMDB_BACKDROP_IMG = "https://image.tmdb.org/t/p/original"
const TMDB_POSTER_IMG = "https://image.tmdb.org/t/p/w500"

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
      backdrop_path: `${TMDB_BACKDROP_IMG}/${rest.backdrop_path}`,
      poster_path: `${TMDB_POSTER_IMG}/${rest.poster_path}`
    }
  })
}
