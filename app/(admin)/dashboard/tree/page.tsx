'use client';

import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { treeSchema } from "./data/schema"
import { getAllTrafficByTree } from "@/_action/traffic"
import { useEffect, useState } from "react"

export default function TrafficPage() {
  const [traffics, setTraffics] = useState([])
  const [loading, setLoading] = useState(true)

  async function getData() {
      const traffics = await getAllTrafficByTree()
      const datadb = {
        traffics: traffics.data
      }
      return z.array(treeSchema).parse(datadb.traffics)
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
            <h2 className="text-2xl font-bold tracking-tight">Cluster 3 Periode Sehari</h2>
          </div>
          {/* <div className="flex items-center space-x-2">
            <UserNav />
          </div> */}
        </div>
        {/* {JSON.stringify(traffics)} */}
        <DataTable data={traffics} columns={columns} />
      </div>
    </>
  )
}
