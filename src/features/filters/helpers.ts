import { z } from 'zod'

export const commaSeparatedArray = z
  .string()
  .transform(val => val.split(',').filter(Boolean)) // string -> string[]
  .pipe(z.array(z.string()))
  .catch([])
