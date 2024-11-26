"use client";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { AddressInfor } from "./addressInfo";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Label } from "@radix-ui/react-label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface AddressMenuContentProps {
    onChangeVelue: (value: string) => void;
    isAddressLebel: string;
    setIsAddressLebel: (value: string) => void;
    isAddressArea: string;
    setIsAddressArea: (value: string) => void;
    isDivision: string | undefined;
    setDivision: (value: string) => void;
    isDistrict: string | undefined;
    setdDistrict: (value: string) => void;
    setIsParmanentAddress: () => void;
    setMenuTriggerDisable: (value: boolean) => void;
}

export const AddressMenuContent: React.FC<AddressMenuContentProps> = ({
    onChangeVelue,
    isAddressLebel,
    setIsAddressLebel,
    isAddressArea,
    setIsAddressArea,
    isDivision,
    setDivision,
    isDistrict,
    setdDistrict,
    setIsParmanentAddress,
    setMenuTriggerDisable
}) => {

    const handleClick = () => {
        if (isAddressArea === "country") {
            setIsAddressArea("Division");
        }
        else if (isAddressArea === "Division") {
            setIsAddressArea("District");
        }
        else if (isAddressArea === "District") {
            setIsAddressArea("Upazila");
        }
        else {
            setIsAddressArea("country");
        }
    }

    const handleBack = () => {
        if (isAddressArea === "Division") {
            setIsAddressLebel("Bangladesh");
            setIsAddressArea("country");
        }
        else if (isAddressArea === "District") {
            setIsAddressArea("Division");
        }
        else if (isAddressArea === "Upazila") {
            setIsAddressArea("District");
        }
    }

    return (
        <div className=" p-2 w-full flex flex-col justify-start items-center">
            <div className="py-2 w-full flex justify-between">
                {isAddressArea !== "country" &&
                    <IoMdArrowRoundBack onClick={handleBack} />
                }
                <h3>Select a {isAddressArea}</h3>
                {isAddressArea === "country" &&
                    <X onClick={setIsParmanentAddress} />
                }
            </div>
            <Separator />
            <div className="py-2 w-full flex justify-between cursor-pointer">
                <ScrollArea className="w-full h-40">
                    {isAddressArea === "country" &&
                        <div onClick={handleClick} className="w-full pt-4 flex justify-between items-center">
                            <p>{isAddressLebel}</p>
                            <IoIosArrowForward />
                        </div>
                    }
                    {isAddressArea === "Division" &&
                        <div className="w-full pt-4 flex flex-col justify-between items-start">
                            <DropdownMenuItem onSelect={() => onChangeVelue("Bangladesh")} className="w-full">
                                <div onClick={() => setMenuTriggerDisable(true)} className="w-full flex justify-between">
                                    <p>All division</p>
                                    <IoIosArrowForward />
                                </div>
                            </DropdownMenuItem>
                            <ul className="w-full flex flex-col justify-between items-start">
                                {
                                    AddressInfor?.Details.map((division, index) => (
                                        <li
                                            className="w-full px-2 flex justify-between hover:bg-neutral-300"
                                            onClick={() => {
                                                handleClick();
                                                setDivision(division.name);
                                                setIsAddressLebel(division.name);
                                            }
                                            }>
                                            <p>{division.name}</p>
                                            <IoIosArrowForward />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                    {isAddressArea === "District" &&
                        <div className="w-full pt-4 flex flex-col justify-between items-start">
                            <DropdownMenuItem onSelect={() => onChangeVelue(isAddressLebel)} className="w-full">
                                <div onClick={() => setMenuTriggerDisable(true)} className="w-full flex justify-between">
                                    <p>All district</p>
                                    <IoIosArrowForward />
                                </div>
                            </DropdownMenuItem>
                            <ul className="w-full flex flex-col justify-between items-start">
                                {
                                    AddressInfor.Details.find((division) => division.name === isDivision)?.Details.map((District, index) => (
                                        <li
                                            className="w-full px-2 flex justify-between hover:bg-neutral-300"
                                            onClick={() => {
                                                handleClick();
                                                setdDistrict(District.name);
                                                setIsAddressLebel(District.name);
                                            }
                                            }>
                                            <p>{District.name}</p>
                                            <IoIosArrowForward />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                    {isAddressArea === "Upazila" &&
                        <div className="w-full pt-4 flex flex-col justify-between items-start">
                            <DropdownMenuItem onSelect={() => onChangeVelue(isAddressLebel)} className="w-full">
                                <div onClick={() => setMenuTriggerDisable(true)} className="w-full flex justify-between">
                                    <p>All upazila</p>
                                    <IoIosArrowForward />
                                </div>
                            </DropdownMenuItem>
                            <ul className="w-full flex flex-col justify-between items-start">
                                {
                                    AddressInfor.Details.find((division) => division.name === isDivision)?.
                                        Details.find((district, index) => district.name === isDistrict)?.
                                        Details.map((Upazila, index) => (
                                            <DropdownMenuItem onSelect={() => {
                                                onChangeVelue(Upazila);
                                                handleClick();
                                                setIsAddressLebel(Upazila);

                                            }} className="w-full">
                                                <div onClick={() => setMenuTriggerDisable(true)} className="w-full flex justify-between">
                                                    <p>{Upazila}</p>
                                                    <IoIosArrowForward />
                                                </div>
                                            </DropdownMenuItem>
                                        ))
                                }
                            </ul>
                        </div>
                    }
                </ScrollArea>
            </div>
        </div>
    );
}