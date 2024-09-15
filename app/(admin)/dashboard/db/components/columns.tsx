"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Traffic } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Traffic>[] = [
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
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("location_name")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "longitude_latitude",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="longitude_latitude" />
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
    accessorKey: "mount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bulan Ke-" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("mount")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "week",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Minggu" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("week") === 1 ? "Pertama" : row.getValue("week") === 2 ? "Kedua" : row.getValue("week") === 3 ? "Ketiga" : row.getValue("week") === 4 ? "Keempat" : "Kelima"}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "day",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hari"/>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("day") == 1 ? "Senin" : row.getValue("day") == 2 ? "Selasa" : row.getValue("day") == 3 ? "Rabu" : row.getValue("day") == 4 ? "Kamis" : row.getValue("day") == 5 ? "Jumat" : row.getValue("day") == 6 ? "Sabtu" : "Minggu"}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "hour",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jam ke-" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("hour")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "traffic",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lalu lintas" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("traffic") == 4 ? "Cepat" : row.getValue("traffic") == 3 ? "Sedang" : row.getValue("traffic") == 2 ? "Pelan" : "Lambat"}
          </span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
