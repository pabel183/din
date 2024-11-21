"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Search } from "lucide-react";
import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
const formSchema = z.object({
    gendername: z.string(),
    maritalstatus: z.string(),
    permanentaddress: z.string(),
})

export const BiodataSearchForm = () => {
    const [isLooking, setIsLooking] = useState(false);
    const [isMaritalStatus, setIsMaritalStatus] = useState(false);
    const [isParmanentAddress, setIsParmanentAddress] = useState(false);


    const genderData = [
        { value: "All", label: "All" },
        { value: "Male's Biodata", label: "Male's Biodata" },
        { value: "Female's Biodata", label: "Female's Biodata" }
    ];

    const maritalstatusData = [
        { value: "All", label: "All" },
        { value: "Never Married", label: "Never Married" },
        { value: "Married", label: "Married" },
        { value: "Divorced", label: "Divorced" },
        { value: "Widow", label: "Widow" },
        { value: "Widower", label: "Widower" }
    ]

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gendername: "All",
            maritalstatus: "All",
            permanentaddress: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="relative w-full">
                <div className="
        w-full flex flex-col lg:flex-row p-8 md:p-12
        bg-[#ffffff] drop-shadow rounded-2xl justify-between gap-8 items-center
        ">
                    <div className="flex w-full flex-col lg:flex-row justify-between gap-8 items-stretch">
                        {/* FieldItem */}
                        <div className="w-full flex flex-col">
                            <FormField
                                control={form.control}
                                name="gendername"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            <h3 className="text-lg text-[#58376b]">I'm looking for</h3>
                                        </FormLabel>
                                        <Select
                                            open={isLooking}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            onOpenChange={() => setIsLooking((preValue) => !preValue)}
                                        >
                                            <FormControl>
                                                <SelectTrigger
                                                    className={cn("py-7 ring-0 focus:ring-offset-0 focus:ring-0",
                                                        isLooking && "rounded-b-none border-b-0"
                                                    )}
                                                    defaultIcon={false}>
                                                    <div className=" w-full flex justify-between items-center text-base text-neutral-600 border-[#7c838e]">
                                                        <p>{field.value}</p>
                                                        {isLooking ? <MdArrowDropUp /> : <MdArrowDropDown />}
                                                    </div>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent
                                                position="popper"
                                                sideOffset={-8}
                                                className="z-0 rounded-t-none border-t-0 w-[--radix-select-trigger-width]"
                                            >{genderData.map((data) => (
                                                <SelectItem key={data.label} className="text-[#b9b1b5]" value={data.value}>{data.label}</SelectItem>
                                            ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full flex flex-col">
                            <FormField
                                control={form.control}
                                name="maritalstatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            <h3 className="text-lg text-[#58376b]">Marital Status</h3>
                                        </FormLabel>
                                        <Select
                                            open={isMaritalStatus}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            onOpenChange={() => setIsMaritalStatus((preValue) => !preValue)}
                                        >
                                            <FormControl>
                                                <SelectTrigger
                                                    className="py-7 ring-0 focus:ring-offset-0 focus:ring-0"
                                                    defaultIcon={false}>
                                                    <div className="w-full flex justify-between items-center text-base text-neutral-600 border-[#7c838e]">
                                                        <p>{field.value}</p>
                                                        {isMaritalStatus ? <MdArrowDropUp /> : <MdArrowDropDown />}
                                                    </div>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {maritalstatusData.map((data) => (
                                                    <SelectItem key={data.label} className="text-[#b9b1b5]" value={data.value}>{data.label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-full flex flex-col">
                            <FormField
                                control={form.control}
                                name="permanentaddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            <h3 className="text-lg text-[#58376b]">Permanent Address</h3>
                                        </FormLabel>
                                        <Select
                                            open={isParmanentAddress}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            onOpenChange={() => setIsParmanentAddress((preValue) => !preValue)}
                                        >
                                            <FormControl>
                                                <SelectTrigger
                                                    className="py-7 ring-0 focus:ring-offset-0 focus:ring-0"
                                                    defaultIcon={false}>
                                                    <div className="w-full flex justify-between items-center text-base text-neutral-600 border-[#7c838e]">
                                                        <p>{field.value || "Select an address"}</p>
                                                        {isParmanentAddress ? <MdArrowDropUp /> : <MdArrowDropDown />}
                                                    </div>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="m@example.com">m@example.com</SelectItem>
                                                <SelectItem value="m@google.com">m@google.com</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="
                    w-full h-20 flex flex-row justify-center sm:justify-end lg:justify-center
                    items-center lg:items-end lg:w-40 
                    ">
                        <Button type="submit" className="w-32  py-7 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#522c79] to-[#e92f83] transition">
                            <Search className="size-4 font-semibold" /> <p>Search</p>
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}