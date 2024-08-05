
import React from 'react'
import LogTerminal from './components/LogTerminal';

const page = () => {
 
  return (
    <div>
         <h1 className="text-2xl font-bold mb-4">Log Terminal</h1>
        
   
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <LogTerminal />
      </div>

    </div>
  )
}

export default page
