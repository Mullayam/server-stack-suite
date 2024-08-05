"use client"

import * as React from "react"

import {
  ColumnDef,

} from "@tanstack/react-table"


import Badge from "@/components/common/Badge"







export const SSLColumns: ColumnDef<any>[] = [
  {
    accessorKey: "domain",
    header: "Source",
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="inline-flex items-center  py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          {row.getValue("domain")}
        </span>

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
    accessorKey: "is_expired",
    header: "Expiry Status",
    cell: ({ row }) => (
      <Badge variant={row.original.is_expired ? "red" : "teal"} text={row.original.is_expired ? "Expired" : "Active"}></Badge>
    ),
  },
  {
    accessorKey: "expires_at",
    header: "SSL Expires On",
    cell: ({ row }) => (
      <h1 className="text-md ">{row.getValue("expires_at")}</h1>
    ),
  },
  {
    accessorKey: "created_at",
    header: "SSL Created On",
    cell: ({ row }) => (
      <h1 className="text-md">{row.getValue("created_at")}</h1>
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
    id: "actions",
    header: "Actions",

    cell: ({ row }) => {
      const payment = row.original

      return (
        <span className="inline-flex overflow-hidden rounded-full border bg-white shadow-sm">
          <button
            className="inline-block border-e p-2 text-gray-700 hover:bg-gray-50 focus:relative"
            title="Edit Product"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>

          <button
            className="inline-block p-3 text-red-700 hover:bg-gray-50 focus:relative"
            title="Delete Product"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </span>
      )
    },
  },
]
