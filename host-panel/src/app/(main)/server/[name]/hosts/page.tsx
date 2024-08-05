import {VerticalTabs} from '@/components/common/tabs/VerticalTabs'
import React, { Suspense } from 'react'
import { DataHosts } from './components/DataHosts';

const Hosts = () => {
  const tabs = [
    { id: 1, label: 'Proxy Hosts', content: <DataHosts name="Proxy Hosts" hostType="proxy" /> },
    { id: 2, label: 'Redirection Hosts', content:  <DataHosts name="Redirection Hosts" hostType="redirect"/> },
    { id: 3, label: 'Not Found Hosts', content: <DataHosts name="Not Found  Hosts"  hostType="notFound"/> },
  ];
  return (
    <Suspense fallback={<div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>}>
      <VerticalTabs tabs={tabs} />
    </Suspense>
  )
}

export default Hosts
