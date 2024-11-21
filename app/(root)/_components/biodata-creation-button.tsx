"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const BiodataCreationButton = () => {
    return (
        <div className="
                felx lg:flex-row flex-col justify-between space-y-8 md:space-x-12">
            <Button className="
                    w-96 sm:w-[450px] md:w-[500px] h-16 md:h-24 text-2xl font-medium rounded-full 
                    bg-gradient-to-r from-[#522c79] to-[#e92f83] transition ease-in-out
                    ">
                <Image
                    className="size-4 sm:size-6 md:size-8 mr-2"
                    src="/plus-ico.svg"
                    alt="plus"
                    width={50}
                    height={50}
                />
                Create your biodata
            </Button>
            <Button variant="ghost" className="
                    border text-2xl font-medium border-[#9c8fa9] transition ease-in-out
                     w-96 sm:w-[450px] md:w-[500px] h-16 md:h-24 rounded-full 
                    ">
                <Image
                    className="size-6 sm:size-8 md:size-10 mr-2"
                    src="/youtube-ico.svg"
                    alt="plus"
                    width={50}
                    height={50}
                />
                How to create biodata
            </Button>
        </div>
    );
}