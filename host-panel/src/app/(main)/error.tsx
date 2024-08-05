'use client' ;
import { useEffect } from 'react'
import Error500 from '@/components/error/internal500';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => { 
    // console.error(error)
  }, [error])

  return<Error500 onClick={() => reset()}/>      
}