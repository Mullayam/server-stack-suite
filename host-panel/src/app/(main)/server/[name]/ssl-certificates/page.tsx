import React from 'react'
import DataTableDemo from '@/components/common/datatable'
import { SSLColumns } from './components/columns'
import { AnimatedModal } from '@/components/common/modals/Animated'
import NewSSLForm from './components/NewSSLForm'


const page = () => {
  const data = [
    {
      id: "1",
      domain: "admin.yoursite.com",
      destination: "http://localhost:7000",
      status: "Active",
      is_expired: true,
      created_at: "2024-07-01 12:00:00",
      expires_at: "2025-01-05 12:00:00",
    },

  ]

  return (
    <div>
      <div className='mb-4 flex justify-between'>
        <h1 className='text-2xl font-bold'>SSL Certificates</h1>
        <AnimatedModal
          width={"75%"}
          description='Add new Certificate to your Deployed Domain'
          title='Create New SSL Certificate'
          trigger={"Add New Certificate"}>
           <NewSSLForm />
        </AnimatedModal>

      </div>
      <hr className='my-4' />
      <DataTableDemo data={data} columns={SSLColumns} />
    </div>
  )
}

export default page
