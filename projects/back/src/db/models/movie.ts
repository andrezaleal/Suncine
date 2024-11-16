import { model, Schema, type Document } from "mongoose"

interface MovieData extends Document {
  tmdb_id: number
  likes: number
  tmdb_obj: Map<string, unknown>
}

const MOVIE_SCHEMA: Schema = new Schema({
  tmdb_id: { type: Number, required: true },
  likes: { type: Number, required: true },
  tmdb_obj: {
    type: Map,
    of: Schema.Types.Mixed,
    required: true
  }
})

export const MOVIE_MODEL = model<MovieData>("Movie", MOVIE_SCHEMA)
