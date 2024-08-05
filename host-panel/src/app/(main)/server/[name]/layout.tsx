import React from 'react'
import Tabs from './components/Tabs';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Tabs />     
      <div className="mt-4">
        {children}
      </div>
    </div>
  )
}

export default layout
