"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface WorkGuidelineProps {
    imageSource: string;
    title: string;
    description: string;
}

export const WorkGuideline: React.FC<WorkGuidelineProps> = ({
    imageSource,
    title,
    description,
}) => {
    return (
        <div className="flex-grow col-span-1 ">
            <Card className="flex flex-col h-full w-full
             shadow-neutral-200 shadow-lg rounded-3xl border-none  bg-gradient-to-b from-[#fef5f8] to-[#fefefe] ">
                <div className="pt-14 w-full text-center">
                    <CardContent>
                        <div className="flex flex-col justify-between items-center gap-4">
                            <Image
                                className="h-16 w-16"
                                src={imageSource}
                                height={44}
                                width={44}
                                alt={imageSource}
                            />
                            <div className="flex flex-col items-center justify-between gap-4">
                                <h2 className="text-2xl font-semibold">{title}</h2>
                                <p className="text-md font-thin text-[#6a626d]">{description}</p>
                            </div>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}
