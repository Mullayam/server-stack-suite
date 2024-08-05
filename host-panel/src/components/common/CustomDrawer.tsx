import React from 'react'

const Drawer = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-10">
  {/* Offcanvas */}
  <div className="">
    <input
      className="peer hidden"
      type="checkbox"
      name="offcanvas"
      id="offcanvas"
      defaultChecked
    />
    {/* This is a transient button. Helps make the user think the real button hasn't gone anywhere */}
    <button className="hidden rounded-full bg-blue-600 px-12 py-6 font-semibold text-white peer-checked:inline-block">
      OPEN
    </button>
    {/* This is the real button. It expands to fill screen to allow user to close the offcanvas by clicking outside.
 Both buttons must share the same styles except for the "peer-checked" classes */}
    <label
      className="inline-block cursor-pointer rounded-full bg-blue-600 px-12 py-6 font-semibold text-white hover:opacity-90 peer-checked:fixed peer-checked:inset-0 peer-checked:z-20 peer-checked:h-screen peer-checked:w-screen peer-checked:rounded-none peer-checked:opacity-0"
      htmlFor="offcanvas"
    >
      OPEN
    </label>
    <div className="pointer-events-none fixed top-0 left-0 z-10 h-screen w-screen bg-gray-700/30 opacity-0 peer-checked:opacity-100" />
    <div className="fixed -right-96 top-0 z-30 flex h-screen w-96 max-w-full bg-white shadow-lg transition-all peer-checked:right-0">
      {/* Offcanvas content */}
      <svg
        className="absolute -z-10 -top-10 opacity-20 "
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="a"
            patternUnits="userSpaceOnUse"
            width={20}
            height={20}
            patternTransform="scale(2) rotate(0)"
          >
            <rect
              x={0}
              y={0}
              width="100%"
              height="100%"
              fill="hsla(0,0%,100%,1)"
            />
            <path
              d="M3.25 10h13.5M10 3.25v13.5"
              strokeLinecap="square"
              strokeWidth="0.5"
              stroke="hsla(258.5,59.4%,59.4%,1)"
              fill="none"
            />
          </pattern>
        </defs>
        <rect
          width="800%"
          height="800%"
          transform="translate(0,0)"
          fill="url(#a)"
        />
      </svg>
      <div className="relative my-auto flex w-full flex-col items-center px-4 py-10">
        <div className="mb-5 font-serif text-9xl font-bold text-gray-700">
          ?
        </div>
        <h1 className="text-center font-serif text-4xl font-bold text-gray-700">
          Is this cool
        </h1>
        <div className="mt-8 flex space-x-2">
          <div className="w-36 min-w-max">
            <input
              className="peer hidden"
              type="checkbox"
              name="cool"
              id="cool"
            />
            <label
              htmlFor="cool"
              className="inline-block w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-md outline-none hover:opacity-90 peer-checked:hidden"
            >
              Cool
            </label>
            <a
              href="/help-us"
              className="hidden w-full cursor-pointer rounded-lg bg-green-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-md outline-none peer-checked:inline-block"
            >
              We're friends
            </a>
          </div>
          <div className="w-36 min-w-max">
            <input
              className="peer hidden"
              type="checkbox"
              name="not-cool"
              id="not-cool"
            />
            <label
              htmlFor="not-cool"
              className="inline-block w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-md outline-none hover:opacity-90 peer-checked:hidden"
            >
              Not Cool
            </label>
            <a
              href="/contact-us"
              className="hidden w-full rounded-lg bg-red-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-md outline-none peer-checked:inline-block"
            >
              Show me what you got
            </a>
          </div>
        </div>
      </div>
      {/* /Offcanvas content */}
    </div>
    <div />
  </div>
  {/* /Offcanvas */}
</div>

  )
}

export default Drawer