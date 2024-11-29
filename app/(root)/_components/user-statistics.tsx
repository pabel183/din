"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserStatisticsProps {
    className: string;
    imageSource: string;
    description: string;
    userNumber: string;
}

export const UserStatistics: React.FC<UserStatisticsProps> = ({
    className,
    imageSource,
    description,
    userNumber,
}) => {
    return (
        <div className="flex-grow col-span-1 ">
            <Card className="flex flex-col h-full w-full
            shadow-neutral-200 shadow-lg rounded-3xl border-none  bg-gradient-to-b from-[#fef5f8] to-[#fefefe] ">
                <div className="pt-14 pb-4 w-full text-center">
                    <CardContent className="p-0 pb-4">
                        <div className="flex flex-col justify-between items-center gap-8">
                            <Image
                                className={cn(`${className}`)}
                                src={imageSource}
                                height={44}
                                width={44}
                                alt={imageSource}
                            />
                            <div className="flex flex-col items-center justify-between gap-6">
                                <p className="text-md text-[#522c79]">{description}</p>
                                <h2 className="text-5xl font-normal">{userNumber}</h2>
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}
