"use client";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'

const RedirectButton = ({text='Please Enter Text',url}:{text:string,url:string}) => {
    const router = useRouter()
  return (
    <Button className="mt-4" onClick={() => router.push(url)}>{text}</Button>
  )
}

export default RedirectButton