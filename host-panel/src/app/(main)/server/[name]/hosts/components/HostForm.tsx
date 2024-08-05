"use client"
import React from 'react'
import { Label } from "@/components/ui/label"
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Switch } from "@/components/ui/switch"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PlusIcon, Trash } from 'lucide-react';
import { useModal } from '@/components/magicui/animated-modal';
import { handler } from '@/lib/api/handlers';
import { useParams } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
const schema = z.object({
    domains: z
        .array(
            z.object({
                source: z.string({
                    required_error: "Server names is required",
                }),
            })
            , { required_error: "Server names is required" }),
    custom_headers: z
        .array(
            z.object({
                name: z.string(),
                value: z.string(),
            })
        ).optional(),
    destination: z.string({
        required_error: "URL is required",
    }).url({
        message: "Please enter a valid URL",
    }),
    domain_name: z.string({
        required_error: "Primary Domain name is required",
    }),
    path: z.string({
        required_error: "Primary Domain name is required",
    }),
    has_custom_headers: z.boolean().optional(),
    websocket_support: z.boolean().optional(),
    force_https_redirect: z.boolean().optional(),
    allow_caching: z.boolean().optional(),
    block_exploits: z.boolean().optional(),
    auto_ssl: z.boolean().optional(),
    publicly_accessible: z.boolean().optional(),
    ip_whitelist: z.boolean().optional(),
    allowed_ips: z
        .array(
            z.string()
        ).optional(),
})

type Schema = z.infer<typeof schema>
const HostForm = ({ hostType }: { hostType: "proxy" | "redirect" | "notFound" }) => {
    const { toast } = useToast()
    const [addCustomHeaders, setAddCustomHeaders] = React.useState(false)
    const { setOpen } = useModal();
    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            domains: [{
                source: ""
            }],
            destination: "",
            path: "/",
            domain_name: "",
            websocket_support: false,
            force_https_redirect: false,
            allow_caching: false,
            block_exploits: false,
            auto_ssl: false,
            has_custom_headers: false,
            custom_headers: [{ name: "", value: "" }],
            publicly_accessible: false,
            // ip_whitelist: false,
            // allowed_ips: [""]

        }
    });
    const { name } = useParams()
    const { register, control, formState: { errors }, handleSubmit, reset } = form
    const { fields, append, remove } = useFieldArray({
        control,
        name: "domains",
        rules: {
            required: {
                value: true,
                message: "At least one is required",
            },
            validate: {
                noEmpty: (value) => value.length > 0,
            },
        }
    });
    const onSubmit = async (data: any) => {
        try {
            const { data: result } = await handler.addNewHosts(name as string, data, "proxy")
            if (!result.success) {
                return toast({
                    title: "Error",
                    description: result.message,
                    variant: "destructive",
                })
            }
            toast({
                title: "Success",
                description: result.message,
            })
            // reset()
            // return setOpen(false)
        } catch (error: any) {
            return toast({
                title: "Error",
                description: error.message,
            })
        }
        finally {
            setOpen(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='  flex  gap-4 flex-row w-full flex-wrap'>

                    <FormField
                        control={control}
                        name="domain_name"
                        render={({ field }) => (
                            <FormItem className='mt-2 w-96'>
                                <FormLabel>Primary Domain Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="yoursite.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="path"
                        render={({ field }) => (
                            <FormItem className='mt-2 w-96'>
                                <FormLabel>Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="yoursite.com/api/v1" {...field} />
                                </FormControl>
                                <FormDescription>
                                    By Deafult Must start with &lsquo;/&rsquo;
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={control}
                        name="destination"
                        render={({ field }) => (
                            <FormItem className='mt-2 w-96'>
                                <FormLabel>Destination (Points to)</FormLabel>
                                <FormControl>
                                    <Input placeholder="i.e. http://localhost:7000" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Local Server of Application
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormLabel>Server Name(s)</FormLabel>
                {fields.map((field, index) => (
                    <div className="flex items-center space-x-4 mt-2" key={index}>
                        <FormControl>
                            <Input placeholder="domain.com"  {...register(`domains.${index}.source`)} />
                        </FormControl>
                        <FormMessage />
                        {errors.domains?.[index] &&
                            <p> {index === 0 ? "Must select at least one" : "Remove empty fields if unused"} </p>
                        }

                        <span
                            onClick={fields.length - 1 === index ? () => append({ source: "" }) : () => remove(index)}
                            className={`px-2 py-2  rounded-full text-white ${fields.length - 1 !== index ? "bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" : "bg-teal-600 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"}  `}

                        >
                            {fields.length - 1 === index ? <PlusIcon className="w-5 h-5" /> : <Trash className="w-5 h-5" />}

                        </span>
                    </div>

                ))}
                <FormDescription>
                    Add domains that you want to proxy
                </FormDescription>

                <div className="grid grid-cols-2 gap-4 mt-4 flex-wrap">
                    <div className="flex items-center space-x-2">
                        <Switch id="websocket_support"{...register('websocket_support')} defaultChecked={false} />
                        <Label htmlFor="websocket_support">Websocket Support</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="forceHttpsRedirect"  {...register('force_https_redirect')} defaultChecked={false} />
                        <Label htmlFor="forceHttpsRedirect">Force Https Redirects</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Controller
                            control={control}
                            name="has_custom_headers"
                            defaultValue={false}
                            render={({ field: { onChange, value } }) => (<>
                                <Switch id='has_custom_headers' onChange={(e: any) => {
                                    setAddCustomHeaders(!addCustomHeaders)
                                    return onChange(e)
                                }} />
                                <Label htmlFor="has_custom_headers">Has Custom Headers</Label>
                            </>
                            )}
                        />

                        {/* e.target.checked ? setAddCustomHeaders(true) : setAddCustomHeaders(false) }) */}
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="autoSSL"  {...register('auto_ssl')} defaultChecked={false} />
                        <Label htmlFor="autoSSL">Auto SSL</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="allowCaching"  {...register('allow_caching')} defaultChecked={false} />
                        <Label htmlFor="allowCaching">Allow Caching</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="blockExploits"  {...register('block_exploits')} defaultChecked={false} />
                        <Label htmlFor="blockExploits">Block Exploits</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="ip_whitelist"  {...register('ip_whitelist')} defaultChecked={false} />
                        <Label htmlFor="ip_whitelist">IP Whitelist</Label>
                    </div>
                </div>
                {/* {
                    addCustomHeaders && <>
                        <FormLabel className='mt-4 font-bold text-xl'>Custom Headers</FormLabel>
                        {fields.map((field, index) => (
                            <div className="flex items-center space-x-4 mt-2" key={index}>
                                <FormControl>
                                    <Input placeholder="Header Name"  {...register(`custom_headers.${index}.name`)} />
                                </FormControl>
                                <FormControl>
                                    <Input placeholder="Header Value"  {...register(`custom_headers.${index}.value`)} />
                                </FormControl>
                                <span
                                    onClick={fields.length - 1 === index ? () => append({ source: "" }) : () => remove(index)}
                                    className={`px-2 py-2  rounded-full text-white ${fields.length - 1 !== index ? "bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" : "bg-teal-600 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"}  `}

                                >
                                    {fields.length - 1 === index ? <PlusIcon className="w-5 h-5" /> : <Trash className="w-5 h-5" />}

                                </span>
                            </div>

                        ))}</>
                } */}

                <div className="flex items-center justify-center space-x-2">
                    <Button type="submit" className="w-28 mt-4">Save</Button>
                </div>
            </form>
        </Form>
    )
}

export default HostForm
