import { z } from "zod"


export const daySchema = z.object({
  id: z.number(),
  longitude_latitude: z.string(),
  day: z.number(),
  cluster: z.number(),
})

export type Day = z.infer<typeof daySchema>

