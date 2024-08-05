import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const VeriticalForm = ({ children,onSubmit,form }: { children: React.ReactNode, onSubmit: ()=>void,form:any }) => {
     
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {children}
            </form>
        </Form>
    )
}

export default VeriticalForm