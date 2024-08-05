"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useFormState } from 'react-dom';
import { defaultClassName, SubmitButton } from './ClientButton'

const ServerButton = ({ text, className = defaultClassName, action }: {
    onResponse: {
        redirect: string
    }, text: string, className: string, action: (prevState: any, formData?: FormData) => Promise<any>,
}) => {
    const { toast } = useToast()
    const router = useRouter()
    const [state, dispatch] = useFormState(action, null)



    React.useEffect(() => {
        if (state) {
            if (state.success) {
                toast({
                    title: 'Success',
                    description: 'Your request has been submitted successfully.',
                })
                router.push('/services/addons')
                return

            }
            toast({
                title: 'Error',
                description: state.message,
                variant: "destructive"
            })
            return
        }

    }, [state])
    return <SubmitButton text={text} className={className} />
}

export default ServerButton