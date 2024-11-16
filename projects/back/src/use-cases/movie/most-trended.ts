import { get10MostPopular } from "../../movie/calcs"
import type { TmdbApiContract } from "../../tmdb"

export async function mostTrendedUseCase(MOVIE_API: TmdbApiContract) {
  const tmd_br_trend_page_1 = await MOVIE_API.trendingMovies()
  const [most_trended] = get10MostPopular(tmd_br_trend_page_1)
  return most_trended
}
