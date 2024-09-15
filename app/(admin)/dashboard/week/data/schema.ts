import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

export const trafficSchema = z.object({
  id: z.number(),
  location_name: z.string(),
  longitude_latitude: z.string(),
  mount: z.number(),
  week: z.number(),
  day: z.number(),
  hour: z.string(),
  traffic: z.number(),
})

export const weekSchema = z.object({
  id: z.number(),
  longitude_latitude: z.string(),
  week: z.number(),
  cluster: z.number(),
})

export type Task = z.infer<typeof taskSchema>
export type Traffic = z.infer<typeof trafficSchema>
export type Week = z.infer<typeof weekSchema>

