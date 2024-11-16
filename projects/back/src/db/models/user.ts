import { model, Schema, type Document } from "mongoose"

export interface UserData {
  id: string
  login: string
  password?: string
  name: string
}

interface UserRawData extends Document {
  login: string
  password: string
  name: string
}

const USER_SCHEMA: Schema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

export const USER_MODEL = model<UserRawData>("User", USER_SCHEMA)
