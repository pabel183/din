"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { AddressMenuContent } from "./address-menu-content";
import { genderData, maritalstatusData } from "./addressInfo";

const formSchema = z.object({
    gendername: z.string(),
    maritalstatus: z.string(),
    permanentaddress: z.string(),
})

export const BiodataSearchForm = () => {
    const [isLooking, setIsLooking] = useState(false);
    const [isMaritalStatus, setIsMaritalStatus] = useState(false);
    const [isParmanentAddress, setIsParmanentAddress] = useState(false);
    const [isAddressLebel, setIsAddressLebel] = useState<string>("Bangladesh");
    const [isAddressArea, setIsAddressArea] = useState<string>("country");
    const [isDivision, setDivision] = useState<string>();
    const [isDistrict, setdDistrict] = useState<string>();
    const [isMenuTriggerDisable, setMenuTriggerDisable] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gendername: "All",
            maritalstatus: "All",
            permanentaddress: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // This will be type-safe and validated.
        console.log(values)
    }

    function reset() {
        setIsParmanentAddress(false);
        setIsAddressLebel("Bangladesh");
        setIsAddressArea("country");
        setDivision(undefined);
        setdDistrict(undefined);
        setMenuTriggerDisable(false);
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
                                            onValueChange={(value) => field.onChange(value)}
                                            defaultValue={field.value}
                                            onOpenChange={() => setIsLooking((preValue) => !preValue)}
                                        >
                                            <FormControl>
                                                <SelectTrigger
                                                    className={cn("py-7 ring-0 focus:ring-offset-0 focus:ring-0",
                                                        isLooking && "rounded-b-none border-b-0"
                                                    )}
                                                    defaultIcon={false}
                                                >
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
                                            >
                                                <div>
                                                    {genderData.map((data) => (
                                                        <SelectItem ItemIcon={false} key={data.label} className="pl-2 text-[#b9b1b5]" value={data.value}>{data.label}</SelectItem>
                                                    ))}
                                                </div>
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
                                                    defaultIcon={false}
                                                >
                                                    <div className="w-full flex justify-between items-center text-base text-neutral-600 border-[#7c838e]">
                                                        <p>{field.value}</p>
                                                        {isMaritalStatus ? <MdArrowDropUp /> : <MdArrowDropDown />}
                                                    </div>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent
                                                position="popper"
                                                sideOffset={-8}
                                                className="z-0 rounded-t-none border-t-0 w-[--radix-select-trigger-width] "
                                            >
                                                {maritalstatusData.map((data) => (
                                                    <SelectItem ItemIcon={false} key={data.label} className="pl-2 text-[#b9b1b5] " value={data.value}>{data.label}</SelectItem>
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
                                        <DropdownMenu
                                            modal={false}
                                            open={isParmanentAddress}
                                            onOpenChange={() => setIsParmanentAddress((preValue) => !preValue)}
                                        >
                                            <FormControl>
                                                <DropdownMenuTrigger
                                                    className={cn(
                                                        `flex h-10 w-full items-center justify-between
                                                         rounded-md px-3 py-7 ring-0 focus:ring-offset-0 
                                                         focus:ring-0 text-base text-neutral-600 border`,
                                                    )}
                                                    asChild
                                                    disabled={isMenuTriggerDisable}
                                                >
                                                    <div className="w-full  flex justify-between items-center text-base text-neutral-600">
                                                        <p>{field.value || "Select an address"}</p>
                                                        {field.value === "" ? <MdArrowDropUp /> : <ImCross className="size-3 font-extrabold" onClick={() => { field.onChange(""); reset() }} />}
                                                    </div>
                                                </DropdownMenuTrigger>
                                            </FormControl>
                                            <DropdownMenuContent
                                                avoidCollisions={false}
                                                sideOffset={0}
                                                className="h-64 w-[--radix-dropdown-menu-trigger-width] -translate-y-[60px]"
                                            // className="h-64 translate-x-0 -translate-y-14 w-[--radix-dropdown-menu-trigger-width]"
                                            >
                                                <AddressMenuContent
                                                    onChangeVelue={(value) => field.onChange(value)}
                                                    isAddressLebel={isAddressLebel}
                                                    setIsAddressLebel={(value) => setIsAddressLebel(value)}
                                                    isAddressArea={isAddressArea}
                                                    setIsAddressArea={(value) => setIsAddressArea(value)}
                                                    setIsParmanentAddress={() => setIsParmanentAddress((preValue) => !preValue)}
                                                    isDivision={isDivision}
                                                    setDivision={(value) => setDivision(value)}
                                                    isDistrict={isDistrict}
                                                    setdDistrict={(value) => setdDistrict(value)}
                                                    setMenuTriggerDisable={(value) => setMenuTriggerDisable(value)}
                                                />
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="
                    w-full h-20 flex flex-row justify-center sm:justify-end lg:justify-center
                    items-center lg:items-end lg:w-40 
                    ">
                        <Button type="submit" className="w-32  py-7 rounded-lg bg-gradient-to-r from-[#522c79] to-[#e92f83] transition">
                            <FaMagnifyingGlass size={1} />
                            <p className="text-sm font-normal">Search</p>
                        </Button>
                    </div>
                </div>
            </form >
        </Form >
    );
}