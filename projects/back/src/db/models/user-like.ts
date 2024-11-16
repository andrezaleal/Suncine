import { model, Schema, type Document } from "mongoose"

interface UserLikeData extends Document {
  user_id: string
  tmdb_id: number
}

const USER_LIKE_SCHEMA: Schema = new Schema({
  user_id: { type: String, required: true },
  tmdb_id: { type: Number, required: true }
})

export const USER_LIKE_MODEL = model<UserLikeData>("UserLike", USER_LIKE_SCHEMA)
