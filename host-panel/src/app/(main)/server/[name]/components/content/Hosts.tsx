import { VerticalTabs } from '@/components/common/tabs/VerticalTabs'
import React from 'react'

const Hosts = () => {
  const tabs = [
    { id: 1, label: 'Proxy Hosts', content: <div>Content for Tab 1</div> },
    { id: 2, label: 'Redirection Hosts', content: <div>Content for Tab 2</div> },
    { id: 3, label: 'Not Found Hosts', content: <div>Content for Tab 3</div> },
  ];
  return (
    <div>
 <VerticalTabs tabs={tabs} />
    </div>
  )
}

export default Hosts
