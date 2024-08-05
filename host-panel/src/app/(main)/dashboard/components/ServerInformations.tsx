import Badge from '@/components/common/Badge'
import React from 'react'

const ServerInformations = () => {
    return (
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4 justify-between">
            <dt className="font-medium text-gray-900">Nginx</dt>
            <dd className=" sm:col-span-2 text-red-500">Not Installed</dd>          
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Apache</dt>
            <dd className=" sm:col-span-2 text-green-500 ">Installed <Badge variant="teal" text='Apache/2.4.56 (Amazon Linux)'/></dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Caddy</dt>
            <dd className=" sm:col-span-2 text-red-500">Not Installed</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Static hostname</dt>
            <dd className=" sm:col-span-2 text-red-500">ip-172-31-29-240</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Virtualization</dt>
            <dd className=" sm:col-span-2 text-red-500">amazon</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Operating System</dt>
            <dd className=" sm:col-span-2 text-red-500">Ubuntu 22.04.4 LTS</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Kernel</dt>
            <dd className=" sm:col-span-2 text-red-500">Linux 6.5.0-1023-aws</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Hardware Model</dt>
            <dd className=" sm:col-span-2 text-red-500"> t3a.large</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Hardware Vendor</dt>
            <dd className=" sm:col-span-2 text-red-500">Amazon EC2</dd>
          </div>        
        </dl>
      </div>

    )
}

export default ServerInformations
