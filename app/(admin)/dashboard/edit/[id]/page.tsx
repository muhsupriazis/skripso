'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast"
import { supabase } from "@/lib/db";


export default function Page() {
  const [hourRekomedation, setHourRekomendation] = useState('')
  const [dayRekomendation, setDayRekomendation] = useState('')
  const [loading, setLoading] = useState(false)
  const [location_name, setLocationName] = useState('')
  const [longitude_latitude, setLongitudeLatitude] = useState('')
  const [week, setWeek] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [traffic, setTraffics] = useState('')

  const handlerSubmit = async () => {
    // ver if data id empty
    const id = Math.floor(Math.random() * 1000)
    console.log({location_name, longitude_latitude, day, hour, traffic, week})
    if(location_name === '' || longitude_latitude === '' || day === '' || hour === '' || traffic === '' || week === '') {
      toast({
        title: 'Error',
        description: 'Semua data harus diisi',
      })
      return;
    }


    const dayDb = parseInt(day)
    const weekDb = parseInt(week)
    const trafficDb = parseInt(traffic)
    
    const { data, error } = await supabase
    .from('traffics')
    .insert([
      {id: id + 60000, location_name, longitude_latitude, day: dayDb, hour, traffic: trafficDb, mount: 12, week: weekDb },
    ])
    .select()
        
    if(error) {
      toast({
        title: 'Error',
        description: 'Gagal menambahkan data',
      })
      return;
    }
    toast({
      title: 'Berhasil',
      description: 'Data berhasil ditambahkan',
    })
    return;
  }

  return (
   <div className="m-auto max-w-3xl py-5 space-y-3">
    <div className="space-y-2">
      <Label>Nama Lokasi</Label>
      <Input onChange={(e) => setLocationName(e.target.value)} />
    </div>
    <div className="space-y-2">
      <Label>Latitude and Longitude</Label>
      <Input onChange={(e) => setLongitudeLatitude(e.target.value)}/>
    </div>
    <div className="space-y-2">
      <Label>Minggu Ke-</Label>
    <Select onValueChange={(e) => setWeek(e)}>
      <SelectTrigger className="">
        <SelectValue placeholder="Pilih Hari" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Pertama</SelectItem>
        <SelectItem value="2">Kedua</SelectItem>
        <SelectItem value="3">Ketiga</SelectItem>
        <SelectItem value="4">Keempat</SelectItem>
      </SelectContent>
    </Select>
    </div>
    <div className="space-y-2">
      <Label>Hari</Label>
    <Select onValueChange={(e) => setDay(e)}>
      <SelectTrigger className="">
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
    </div>

    <div className="space-y-2">
      <Label>Jam</Label>
      <Select onValueChange={(e) => setHour(e)}>
            <SelectTrigger className="">
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
    </div>
    <div className="space-y-2">
      <Label>Jam</Label>
      <Select onValueChange={(e) => setTraffics(e)}>
            <SelectTrigger className="">
              <SelectValue placeholder="Pilih Traffic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Cepat</SelectItem>
              <SelectItem value="2">Sedang</SelectItem>
              <SelectItem value="3">Pelan</SelectItem>
              <SelectItem value="4">Lambat</SelectItem>
            </SelectContent>
          </Select>
    </div>
    <Button onClick={handlerSubmit}>Tambah Data</Button>
   </div>
  )
}