'use client';

import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { weekSchema } from "./data/schema"
import { getAllTraffic, getAllTrafficByWeek, getLocationNameAndLonglit } from "@/_action/traffic"
import { useEffect, useState } from "react"

export default function TrafficPage() {
  const [traffics, setTraffics] = useState([])
  const [loading, setLoading] = useState(true)

  async function getData() {
      const traffics = await getAllTrafficByWeek()
      const datadb = {
        traffics: traffics.data
      }
      return z.array(weekSchema).parse(datadb.traffics)
  }
  
  useEffect(() => {
    getData().then((data:any) => {
      setTraffics(data)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Cluster Periode Mingguan</h2>
          </div>
        </div>
        <DataTable data={traffics} columns={columns} />
      </div>
    </>
  )
}
