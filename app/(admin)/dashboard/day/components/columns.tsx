"use client"

import { ColumnDef } from "@tanstack/react-table"

import location from '../../../../../lib/location.json';
import { Day } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"

console.log(location)

export const columns: ColumnDef<Day>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id-Traffic" />
    ),
    cell: ({ row }) => <div className="w-[80px]">id-{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "location_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lokasi" />
    ),
    cell: ({ row }) => {
      const label = location.find((label) => label.longitude_latitude === row.original.longitude_latitude)
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {label?.location_name}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "longitude_latitude",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Longitude latitude" />
    ),
    cell: ({ row }) => {
 
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("longitude_latitude")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "day",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hari" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("day") === 1 ? "Senin" : row.getValue("day") === 2 ? "Selasa" : row.getValue("day") === 3 ? "Rabu" : row.getValue("day") === 4 ? "Kamis" : row.getValue("day") === 5 ? "Jumat" : row.getValue("day") === 6 ? "Sabtu" : "Minggu"}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "cluster",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cluster" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            Cluster {parseInt(row.getValue("cluster")) + 1}
          </span>
        </div>
      )
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]
