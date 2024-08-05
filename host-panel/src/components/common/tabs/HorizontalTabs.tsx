import React from 'react'
 

type TabsbarProps = {
    tabs: { name: string, icon: string,content:React.ReactNode }[]
    activeTab: number
    setActiveTab: React.Dispatch<React.SetStateAction<number>>  
}
const Tabsbar = ({ tabs, activeTab, setActiveTab, }: TabsbarProps) => {

    return (
        <div className="border-b border-gray-200 dark:border-gray-700 ">
            <ul className="relative flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {
                    tabs.map((tabname: { name: string, icon: string }, index: number) => (
                        <li className="me-2">                            
                            <span                             
                                onClick={() => setActiveTab(index)}
                                className={` z-[1] cursor-pointer inline-flex items-center rounded-t-lg justify-center p-4 group  ${activeTab === index ? "border-b-2 border-blue-600 text-blue-600 bg-gray-100  active dark:bg-gray-800 dark:text-blue-500" : "text-gray-500   dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-200 "}`}
                            >
                                <svg
                                    className={`w-4 h-4 me-2 ${activeTab === index ? "text-blue-600 dark:text-blue-500" : "group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"} `}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                                {tabname.name}
                            </span>
                        </li>
                    ))
                }

            </ul>
            <div className="mt-4" >
            {tabs[activeTab].content}
                </div>


            
        </div>
    )
}

export default Tabsbar
