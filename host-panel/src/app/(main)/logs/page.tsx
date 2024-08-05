import React from 'react'
import { ActiveAnalytic } from './components/ActiveAnalytic'

const page = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold' >Metrics</h1>
      <hr className='my-4'/>
     <ActiveAnalytic /> 
    </div>
  )
}

export default page
