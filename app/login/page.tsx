"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
// import { toast } from "@/hooks/use-toast"
// import { supabase } from "@/lib/db"
//import { cookies } from "next/headers"
import Link from "next/link"
// import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register() {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  //const router = useRouter();
  const [checked, setChecked] = useState(false);

  const handlerSubmit = async () => {

    console.log(username, password)
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="max-w-3xl w-80">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Masuk</CardTitle>
          <Separator/>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Username</Label>
            <Input onChange={(e) => setUsername(e.target.value)} type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input onChange={(e) => setPassword(e.target.value)} type={checked? 'text' : 'password'} />
          </div>
          <div className="flex gap-3">
          <Checkbox checked={checked} onClick={() => setChecked(!checked)} id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lihat Password
          </label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button onClick={handlerSubmit} className="w-full">Masuk</Button>
          {/* <CardDescription>Belum punya akun? <Link className={buttonVariants({variant: 'link'})} href={'/register'}>Register</Link></CardDescription> */}
          <Link className={buttonVariants({variant: 'link'})} href={'/reset-password'}>Lupa password?</Link>
        </CardFooter>
      </Card>
    </div>
  )
}