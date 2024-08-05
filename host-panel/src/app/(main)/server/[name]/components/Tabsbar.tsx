"use client";
import Link from 'next/link'
import React from 'react'
import { usePathname,useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
type TabsbarProps = {
    tabs: { name: string, icon: React.JSX.Element, content: React.ReactNode, url: string, }[]

}
const Tabsbar = ({ tabs }: TabsbarProps) => {
    const currentPathname = usePathname()
const router = useRouter()
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 ">
            <ul className="flex flex-wrap  text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:hidden lg:flex">
                {
                    tabs.map((tabname: { name: string, icon: React.JSX.Element, url: string }, index: number) => (
                        <li className="me-2" key={index}>
                            <Link href='/server/[server]' passHref rel="noopener noreferrer" as={`/server/nginx/${tabname.url}`}
                                className={` z-[1] cursor-pointer inline-flex items-center rounded-t-lg justify-center p-3 group ${currentPathname.includes(tabname.url) ? "border-b-2 border-blue-600 text-blue-600 bg-gray-100  active dark:bg-gray-800 dark:text-blue-500" : "text-gray-500   dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-200 "}  `}
                            >
                                {/* {tabname.icon} */}
                                {tabname.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div  className='hidden xs:block m-2'>
                <Select onValueChange={(data) =>router.push(data)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {tabs.map((tabname: { name: string, icon: React.JSX.Element, url: string }, index: number) => (
                                <SelectItem key={index} value={tabname.url} >{tabname.name}</SelectItem>
                            ))}                           
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

        </div>
    )
}

export default Tabsbar
