'use client';

import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { trafficSchema } from "./data/schema"
import { getAllTraffic } from "@/_action/traffic"
import { useEffect, useState } from "react"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function TrafficPage() {
  const [traffics, setTraffics] = useState([])
  const [loading, setLoading] = useState(true)

  async function getData() {
      const traffics = await getAllTraffic()
      const datadb = {
        traffics: traffics.data
      }
      return z.array(trafficSchema).parse(datadb.traffics)
  }
  
  useEffect(() => {
    getData().then((data:any) => {
      setTraffics(data)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <div className="text-center py-3">Loading...</div>
  }

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <Link href={'/dashboard/add'} className={buttonVariants({variant: 'secondary'})}>Tambah Data</Link>
        </div>
        {/* {JSON.stringify(traffics)} */}
        <DataTable data={traffics} columns={columns} />
      </div>
    </>
  )
}
