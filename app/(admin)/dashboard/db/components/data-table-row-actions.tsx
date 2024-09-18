"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/hooks/use-toast"


import { trafficSchema } from "../data/schema"
import { supabase } from "@/lib/db"
import { useRouter } from "next/navigation"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const router = useRouter();
  const traffic = trafficSchema.parse(row.original)
  const handlerDelete = async () => {
    const isDelete = confirm('Apakah anda yakin ingin menghapus data ini?')
    if(!isDelete) {
      toast({
        title: 'Batal',
        description: 'Batal  menghapus',
      })
      return
    }
    const { error } = await supabase
    .from('traffics')
    .delete()
    .eq('id', traffic.id) 
    if(error) {
      toast({
        title: 'Error',
        description: 'Gagal  menghapus',
      })
      return;
    }
    toast({
      title: 'Success',
      description: 'Berhasil menghapus',
    })
  }

  const handlerEdit = () => {
    router.push(`/dashboard/edit/${traffic.id}`)
  }

  return (
    <Button onClick={handlerDelete}>
      Delete
    </Button>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={handlerEdit}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handlerDelete}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
