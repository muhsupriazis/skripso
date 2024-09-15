import { z } from "zod"


export const treeSchema = z.object({
  id: z.number(),
  longitude_latitude: z.string(),
  period: z.number(),
  cluster: z.number(),
})

export type Tree = z.infer<typeof treeSchema>

