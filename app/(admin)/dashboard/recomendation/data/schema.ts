import { z } from "zod"


export const recomendationSchema = z.object({
  id: z.number(),
  longitude_latitude: z.string(),
  period: z.number(),
  cluster: z.number(),
})

export type RecomendatioNine = z.infer<typeof recomendationSchema>

