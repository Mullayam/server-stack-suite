import React from 'react'
import { redirect } from 'next/navigation'
const page = ({params}:{params:{name:string}}) => {
  return  redirect(`/server/${params.name}/hosts`)
}

export default page
