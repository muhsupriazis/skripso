import { z } from "zod"


export const nineSchema = z.object({
  id: z.number(),
  longitude_latitude: z.string(),
  period: z.number(),
  cluster: z.number(),
})

export type Nine = z.infer<typeof nineSchema>

