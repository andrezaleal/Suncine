import type { DbModels } from "../.."

export async function findUserLikes(MODELS: DbModels, user_id: string) {
  const existing_likes = await MODELS.USER_LIKE.find({
    user_id: user_id
  })
  const tmdb_ids = existing_likes.map((like) => like.tmdb_id)
  const existing_movies = await MODELS.MOVIE.find({
    tmdb_id: { $in: tmdb_ids }
  })
  return existing_movies.map((movie_mongo) => ({
    id: movie_mongo.id,
    tmdb_id: movie_mongo.tmdb_id,
    likes: movie_mongo.likes,
    tmdb_obj: movie_mongo.tmdb_obj
  }))
}
