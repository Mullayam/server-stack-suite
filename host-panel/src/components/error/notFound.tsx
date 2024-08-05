import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
  const router = useRouter()
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="w-full mx-auto text-center lg:w-2/3">
        <h1 className="mb-4 text-6xl font-thin text-gray-900 dark:text-gray-300">404</h1>
        <p className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-300 md:text-2xl">
          Oh no! We couldn’t find the page you were looking for.
        </p>
        <p className="mb-3 text-lg font-medium text-gray-700 dark:text-gray-300">         
          <span onClick={() => router.back()} className="underline">
            homepage
          </span>          
        </p>
      </div>
    </section>

  )
}

export default NotFound