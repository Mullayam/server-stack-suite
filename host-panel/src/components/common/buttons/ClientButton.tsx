"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { ToasterToast, useToast } from '@/components/ui/use-toast';
import { useFormState, useFormStatus } from 'react-dom';

export const defaultClassName = "duration-300 disabled:opacity-70 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "

type ClientFormButtonProps = {
  action: (prevState: any, formData?: FormData) => Promise<any>,
  text: string,
  className?: string
  toastData?: {
    title: string,
    description: string,
    action?: ToasterToast['action']
    variant?: ToasterToast['variant']
  }
  onResponse: {
    redirect: string
  }
}

const ClientFormButton = ({ action, toastData, text, className = defaultClassName, onResponse }: ClientFormButtonProps) => {
  const { toast } = useToast()
  const router = useRouter()
  const [state, dispatch] = useFormState(action, null)
  React.useEffect(() => {
    if (state) {
      if (state.success) {
        toast({
          title: toastData?.title || 'Success',
          description: toastData?.description || 'Your request has been submitted successfully.',
        })
        router.push(onResponse.redirect)
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
  return (
    <form action={dispatch}>
      <SubmitButton text={text} className={className} />
    </form>
  )
}
export function SubmitButton({ text, className }: { text: string, className: string }) {
  const { pending } = useFormStatus()

  return (
    <button
      aria-busy={pending}
      disabled={pending}
      type='submit'
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#000"
        viewBox="0 0 256 256"
        className="animate-spin"
      >
        <path d="M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"></path>
      </svg>
      {pending ? 'Loading...' : text}
    </button>
  )
}
export default ClientFormButton