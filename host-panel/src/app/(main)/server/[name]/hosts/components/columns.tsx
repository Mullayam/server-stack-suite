"use client"

import * as React from "react"
import {
  CaretSortIcon,

  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,

} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Badge from "@/components/common/Badge"
import { ProxyHost } from "./DataHosts"




export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const AllColumns: ColumnDef<ProxyHost>[] = [
  {
    accessorKey: "domain",
    header: "Source",
    cell: ({ row }) => (
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          {row.getValue("domain")}
        </span>
       <small>
       Created On : {`${new Date(row.original.created_at).toLocaleDateString()} ${new Date(row.original.created_at).toLocaleTimeString()}`}
       </small>
      </div>
    ),
  },
  {
    accessorKey: "destination",
    header: "Destination",
    cell: ({ row }) => (
      <h1 className="text-md font-bold">{row.getValue("destination")}</h1>
    ),
  },
  {
    accessorKey: "ssl_provier",
    header: "SSL Provider",
    cell: ({ row }) => (
      <h1 className="text-md">{row.original.is_ssl ? row.getValue("ssl_provier") : "Disabled"}</h1>
    ),
  },
  {
    accessorKey: "access",
    header: "Access",
    cell: ({ row }) => (
      <Badge text={row.getValue("access")} variant="yellow" />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
        <span className="size-1.5 inline-block rounded-full bg-teal-800 dark:bg-teal-500" />
        {row.getValue("status")}
      </span>


    ),
  },
  {
    accessorKey: "socket_support",
    header: "Socket Support",

    cell: ({ row }) => <div className="items-center">{row.getValue("socket_support")?"Enabled":"Disabled"}</div>,
  },

  {
    id: "actions",
    header: "Actions",
     
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
