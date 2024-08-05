"use client";
import { XAlertDialog } from '@/components/alerts/dialog';
import { Button } from '@/components/ui/button'
import { ChevronLeft, PowerIcon, RefreshCcw, Settings, SquareTerminal,ListRestart } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import React from 'react'


const BackButton = () => {
    const router = useRouter()
    const { name } = useParams()
    return (
        <div className="flex justify-between">
            <Button variant="outline" size="icon" className="h-7 w-7 mb-4 hover:rounded-full" onClick={() => router.back()}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
            </Button>
            {name &&  <div className='gap-2  inline-flex'>
                <XAlertDialog
                    trigger={<PowerIcon className="cursor-pointer" />}
                    title="Power Off the Runnning Services"
                    description="You wont be able to start the server and logged out.To Restart the server you have connect to the server via SSH or Hosting Console. If you have unsaved changes, they will be lost.  Are you sure you want to Power Off the server?"
                    actionHandler={() => console.log('delete')} />
                <XAlertDialog
                    trigger={<RefreshCcw className="cursor-pointer" />}
                    title="Restart the Runnning Services"
                    description="For a few minutes the server will be down and starts running, You will be disconnected and logged out.Log in after 2-3 minutes.If you have unsaved changes, they will be lost. Are you sure you want to restart the services?"
                    actionHandler={() => console.log('delete')} />
                <XAlertDialog trigger={<ListRestart className="cursor-pointer" />} title="Delete" description="Are you sure you want to delete/reset the server Configurations?" actionHandler={() => console.log('delete')} />

                 <SquareTerminal className='cursor-pointer '/>
                 <Settings className='cursor-pointer '/>
            </div>}
           
        </div>
    )

}
 

export default BackButton