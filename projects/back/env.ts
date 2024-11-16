export type EnvVar = typeof ENV_VAR

export const ENV_VAR = {
  TMDB_TOKEN: process.env.TMDB_TOKEN as string,
  PEPPER: process.env.PEPPER as string,
  JWT_TOKEN: process.env.JWT_TOKEN as string
} as const
