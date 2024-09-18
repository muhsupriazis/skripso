'use client';

import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { recomendationSchema } from "./data/schema"
import { getAllRecomendationNine, getAllTrafficByDay, getAllTrafficByHour, getAllTrafficByNine } from "@/_action/traffic"
import { useEffect, useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";


export default function TrafficPage() {
  const [traffics, setTraffics] = useState([])
  const [loading, setLoading] = useState(false)
  const [hourRekomedation, setHourRekomendation] = useState('')
  const [dayRekomendation, setDayRekomendation] = useState('')

  async function getData() {
      const rekomendation = await getAllRecomendationNine()
      const daysRecomendation = await getAllTrafficByDay()
      console.log(rekomendation.data);
      console.log(hourRekomedation);
      const filteredHour = rekomendation.data?.filter((item:any) => item.period === parseInt(hourRekomedation))
      const filteredDay = daysRecomendation.data?.filter((item:any) => item.day === parseInt(dayRekomendation)) || []
      console.log(filteredHour);
      console.log(filteredDay);
      const dataFixed = filteredHour?.map((item:any) => {
        for(let i = 0; i < filteredDay.length; i++) {
          if(item.longitude_latitude === filteredDay[i].longitude_latitude) {
            if(filteredDay[i].cluster >= 1) {
              return {
                ...item,
                cluster: filteredDay[i].cluster 
              }
            }
            return {
              ...item,
            }
          }
      }})
      const datadb = {
        traffics: dataFixed
      }
      console.log(datadb.traffics)
      return z.array(recomendationSchema).parse(datadb.traffics)
  }

  const handlerSubmit = () => {
    setLoading(true)
    console.log(hourRekomedation, dayRekomendation)
    getData().then((data:any) => {
          setTraffics(data)
          setLoading(false)
    })
  }

  
  // useEffect(() => {
  //   getData().then((data:any) => {
  //     setTraffics(data)
  //     setLoading(false)
  //   })
  // }, [])


  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex space-x-3" >
          <Select onValueChange={(e) => setDayRekomendation(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pilih Hari" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Senin</SelectItem>
              <SelectItem value="2">Selasa</SelectItem>
              <SelectItem value="3">Rabu</SelectItem>
              <SelectItem value="4">Kamis</SelectItem>
              <SelectItem value="5">Jumat</SelectItem>
              <SelectItem value="6">Sabtu</SelectItem>
              <SelectItem value="7">Minggu</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(e) => setHourRekomendation(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pilih Jam" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">06.30 – 07.00</SelectItem>
              <SelectItem value="2">07.15 - 07.45</SelectItem>
              <SelectItem value="3">08.00 - 08.30</SelectItem>
              <SelectItem value="4">11.30 – 12.00</SelectItem>
              <SelectItem value="5">12.15 - 12.30</SelectItem>
              <SelectItem value="6">12.45 - 13.15</SelectItem>
              <SelectItem value="7">16.45 - 17.15</SelectItem>
              <SelectItem value="8">17.30 - 18.00</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handlerSubmit}>Tampilakan Rekomendasi</Button>
          </div>
        </div>
        {/* {JSON.stringify(traffics)} */}
        <div>
          {loading ? 
          <p className="text-center">Loading...</p>
          : 
          <DataTable data={traffics} columns={columns} />}
        {/* <DataTable data={traffics} columns={columns} /> */}
        </div>
      </div>
    </>
  )
}
