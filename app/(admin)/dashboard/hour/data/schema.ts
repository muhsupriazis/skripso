import { z } from "zod"


export const hourSchema = z.object({
  id: z.number(),
  longitude_latitude: z.string(),
  hour: z.string(),
  cluster: z.number(),
})

export type Hour = z.infer<typeof hourSchema>

