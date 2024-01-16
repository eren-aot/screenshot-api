"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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


const urlSchema = z.object({
    url: z.string().min(2),
})

type Props = {}

const URLForm = (props: Props) => {

    const form = useForm<z.infer<typeof urlSchema>>({
        resolver: zodResolver(urlSchema),
        defaultValues: {
            url: "https://github.com/"
        },
    })

    const onSubmit = (data: z.infer<typeof urlSchema>) => {
        console.log(data)

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Website Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Add Website" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the website you for screenshot.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Render</Button>
            </form>
        </Form>
    )
}

export default URLForm