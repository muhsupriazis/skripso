"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, priorities, statuses } from "../data/data"
import location from '../../../../../lib/location.json';
import { RecomendatioNine } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

console.log(location)

export const columns: ColumnDef<RecomendatioNine>[] = [
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
            {label?.location_name.split('Pt.')[0]}
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
    accessorKey: "period",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Periode" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("period") == 1 ? '06.30 – 07.00' : row.getValue("period") == 2 ? '07.15- 07.45' : row.getValue("period") == 3 ? '08.00-08.30' : row.getValue("period") == 4 ? '11.30 – 12.00' : row.getValue("period") == 5 ? '12.15- 12.30' : row.getValue("period") == 6 ? '12.45- 13.15' : row.getValue("period") == 7 ? '16.45-17.15' : '17.30-18.00'}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "cluster",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rekomendasi" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {parseInt(row.getValue("cluster")) > 0 ? '✔ ' : ''}
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
