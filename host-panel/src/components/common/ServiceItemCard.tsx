import React from 'react'

const ServiceItemCard = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:p-12 lg:grid-cols-3 xl:grid-cols-4">
      <div className="relative bg-gray-100 p-6">
        {/* FOR LEFT BADGE */}
        <div className="absolute left-0 top-0 bg-blue-600 p-1 text-center font-semibold text-white">
          left
        </div>
        {/* FOR RIGHT BADGE */}
        <div className="absolute right-0 top-0 bg-green-600 p-1 text-center font-semibold text-white">
          right
        </div>
        {/* FOR COMING SOON */}
        <div className="absolute right-0 top-0 h-full w-full flex justify-center items-center backdrop-blur-[2px] bg-[rgba(0,0,0,0.6)] p-1 text-center font-semibold text-white">
          Coming Soon
        </div>
        <p className="text-center text-4xl">😁</p>
        <h2 className="mt-2 text-center text-lg font-semibold text-gray-800">
          Your Feature Here
        </h2>
        <p className="mt-2 text-center text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias excepturi
          fuga, laudantium molestias nesciunt tempore.
        </p>
      </div>
    </div>


  )
}

export default ServiceItemCard