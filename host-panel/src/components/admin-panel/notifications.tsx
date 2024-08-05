import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const Notifications = () => {
  return (
    <React.Fragment>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="relative inline-flex justify-center items-center h-8 w-8 rounded-full text-sm font-semibold  border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
          >
            <svg
              className="flex-shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span className="flex absolute top-0 end-0 size-3 -mt-1.5 -me-1.5">
              <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600" />
              <span className="relative inline-flex rounded-full size-3 bg-red-500" />
            </span>

          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="mx-auto my-10 max-w-lg rounded-xl border border-gray-100 px-4 py-8 shadow-lg">
            <div className="mb-4 flex justify-between border-b pb-3">
              <p className="text-xl font-bold text-gray-700">Activity feed</p>
              <button className="text-sm font-medium text-blue-700 focus:outline-none focus:ring-1">
                Notification Settings
              </button>
            </div>
            <div>
              <div
                className="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
                tabIndex={0}
              >
                <div className="relative flex items-center">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                    alt="Simon Lewis"
                  />
                  <div className="ml-4 flex flex-col sm:w-96">
                    <p className="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
                    <div className="text-sm text-gray-400">
                      <span className="shrink-0 mr-1 text-rose-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline h-3 w-3"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                      </span>
                      <span className="mr-1 font-medium text-rose-500">
                        liked your comment:
                      </span>
                      <span className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-0 right-2 text-sm text-gray-400">
                    1min ago
                  </span>
                </div>
              </div>
              <div
                className="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
                tabIndex={0}
              >
                <div className="relative flex items-center">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                    alt="Simon Lewis"
                  />
                  <div className="ml-4 flex flex-col sm:w-96">
                    <p className="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
                    <div className="mb-2 text-sm text-gray-400">
                      <span className="shrink-0 mr-1 text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline h-3 w-3"
                        >
                          <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                          <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                        </svg>
                      </span>
                      <span className="mr-1 font-medium text-blue-500">
                        replied to your comment:
                      </span>
                      <span className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </span>
                    </div>
                    <div className="rounded-xl bg-blue-50 p-4 text-gray-500">
                      <p className="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
                        soluta modi? Amet, sequi distinctio.
                      </p>
                    </div>
                  </div>
                  <span className="absolute top-0 right-2 text-sm text-gray-400">
                    1min ago
                  </span>
                </div>
              </div>
              <div
                className="mb-3 space-y-4 py-2 focus:outline-none focus:ring-1"
                tabIndex={0}
              >
                <div className="relative flex items-center">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/images/ddHJYlQqOzyOKm4CSCY8o.png"
                    alt="Simon Lewis"
                  />
                  <div className="ml-4 flex flex-col sm:w-96">
                    <p className="mb-1 font-medium text-gray-700">Johanson Levinsiki</p>
                    <div className="mb-2 text-sm text-gray-400">
                      <span className="shrink-0 mr-1 text-blue-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline h-3 w-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="mr-1 font-medium text-blue-500">
                        shared a file
                      </span>
                    </div>
                    <div className="rounded-xl bg-blue-50 p-4 text-gray-600">
                      <div className="flex items-center">
                        <span className="text-blue-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                          </svg>
                        </span>
                        <div className="ml-4 pr-10">
                          <p className="mb-1 text-sm font-medium text-gray-700">
                            Earnings Report 2021 | Berkshire Hathaway Inc
                          </p>
                          <p className="text-xs text-gray-400">
                            512KB
                            <a className="ml-1 text-blue-700" href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="inline h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                              </svg>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-0 right-2 text-sm text-gray-400">
                    1min ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>


    </React.Fragment>
  )
}

export default Notifications