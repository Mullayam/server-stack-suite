import DataTableDemo from '@/components/common/datatable'
import React from 'react'
import { AllColumns } from './columns'
import HostForm from "./HostForm";
import { AnimatedModal } from '@/components/common/modals/Animated';

export type ProxyHost = {
  domain: string
  destination: string
  ssl_provier: string
  is_ssl: boolean
  status: "Online" | "Offline"
  access: string
  socket_support: string | null,
  created_at: string | Date

}
export const DataHosts = ({ name, hostType }: { name: string, hostType: "proxy" | "redirect" | "notFound" }) => {
  const data: ProxyHost[] = [
    {
      domain: "admin.yoursite.com",
      destination: "http://localhost:7000",
      is_ssl: true,
      ssl_provier: "Lets Encrypt",
      access: "Public",
      status: "Online",
      socket_support: null,
      created_at: "2023-01-01 12:00:00",
    },

  ]

  return (
    <div>
      <div className='mb-4 flex justify-between'>
        <h1 className='text-2xl font-bold'>{name}</h1>
        <AnimatedModal
          description='Add new host to your server'
          title='Add New Host'
          trigger={"Add New Host"}>
          <HostForm hostType={hostType} />
        </AnimatedModal>

      </div>
      <hr className='my-4' />
      <DataTableDemo data={data} columns={AllColumns} />
    </div>
  )
}

