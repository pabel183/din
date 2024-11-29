"use client";

import Image from "next/image";

import { UserStatistics } from "./_components/user-statistics";
import { WorkGuideline } from "./_components/work-guideline";
import { BiodataCreationButton } from "./_components/biodata-creation-button";
import { BiodataSearchForm } from "./_components/biodata-search-form";

const HomePage = () => {
    return (
        <div className="flex flex-col justify-between items-center gap-56 pb-36 bg">
            <div className="
            flex flex-col justify-between items-center 
            gap-8 md:gap-14 w-full
            ">
                <div className="
                flex flex-col justify-between items-center 
                gap-2 md:gap-4 
                text-3xl md:text-7xl tracking-tight
                font-semibold md:font-bold  
                
                ">
                    <h1 className="text-[#522c79] ">Bangladeshi Islamic</h1>
                    <h1 className="text-[#e92f83] ">Matrimony</h1>
                </div>
                <div className="
                text-[#5f5565] 
                text-xs md:text-lg lg:text-2xl  
                font-semibold 
                tracking-tight
                ">
                    <h3>It is now easy to find a religious life partner in your own upazila</h3>
                </div>

                <div className="w-full flex flex-col justify-between gap-8 lg:px-16 items-center">
                    <div className="w-full sm:max-w-3xl">
                        <div className="w-full h-8 flex flex-col justify-end items-stretch">
                            <Image
                                className="h-full w-full"
                                src="/hadith-bg-top.svg"
                                alt="hadith"
                                height={10}
                                width={30}
                            />
                        </div>
                        <div className="max-w-sm sm:max-w-full flex items-center mx-auto">
                            <div className="
                            w-full first:p-4 sm:p-6 flex flex-col justify-between items-center bg-[#fde5f9] border-[#745095] 
                            text-xs sm:text-base lg:text-lg rounded-2xl border text-center
                            ">
                                <h3 className="text-neutral-600">When a person gets married he has completed half of his deen, so let him fear Allah with regard to the other half. -</h3>
                                <h2 className="text-[#a1347c]">(Shu'ab al-Eameen 5486)</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4 md:max-w-6xl" >
                        <div className="relative w-full">
                            <BiodataSearchForm />
                        </div>
                    </div>
                </div>
            </div>

            <div className="
            flex flex-col text-center justify-between items-center gap-8 transition ease-in-out
            max-w-sm  sm:max-w-lg md:max-w-2xl lg:max-w-7xl text-[#522c79]
            ">
                <h2 className="
                    text-3xl lg:text-5xl font-semibold lg:font-bold tracking-tight
                    "><span className="text-[#e92f83]">Create biodata</span> in OrdhekDeen completely free of cost
                </h2>
                <BiodataCreationButton />
            </div>
            <div className="flex flex-col  justify-between items-center gap-12 w-full">
                <div className="
                text-center transition ease-in-out
                max-w-md  sm:max-w-lg md:max-w-2xl lg:max-w-6xl text-[#522c79]
                ">
                    <h2 className="
                    text-3xl lg:text-5xl font-semibold lg:font-bold
                    "><span className="text-[#e92f83]">OrdhekDheen</span> User Statistics
                    </h2>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-stretch gap-8 px-8 md:px-28">
                    <UserStatistics
                        className="h-20 w-36"
                        imageSource="/couple.svg"
                        description="Total Groom and Bride's Biodates"
                        userNumber="0000"
                    />
                    <UserStatistics
                        className="h-20 w-24 pt-1"
                        imageSource="/male.svg"
                        description="Total Groom Biodates"
                        userNumber="000"
                    />
                    <UserStatistics
                        className="h-20 w-24 pt-1"
                        imageSource="/female.svg"
                        description="Total Bride's Biodates"
                        userNumber="000"
                    />
                    <UserStatistics
                        className="h-20 w-36 pt-1"
                        imageSource="/married.svg"
                        description="Total Successful Marriages"
                        userNumber="000"
                    />
                </div>
            </div>
            <div className="flex flex-col  justify-between items-center gap-12 w-full">
                <div className="
                text-center transition ease-in-out
                max-w-md  sm:max-w-lg md:max-w-2xl lg:max-w-6xl text-[#522c79]
                ">
                    <h2 className="
                    text-3xl lg:text-5xl font-semibold lg:font-bold
                    "><span className="text-[#e92f83]">How</span> OrdhekDeen Works
                    </h2>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-stretch gap-8 px-8 md:px-28">
                    <WorkGuideline
                        imageSource="/hiw-create-biodata.svg"
                        title="Create Biodata"
                        description="You can easily create a biodata on OrdhekDeen completely free of cost within some steps."
                    />
                    <WorkGuideline
                        imageSource="/hiw-search.svg"
                        title="Search Biodata"
                        description="You can easily search biodata using many filters including age, upazila, profession, educational qualification."
                    />
                    <WorkGuideline
                        imageSource="/hiw-contact.svg"
                        title="Contact with gurdians"
                        description="If someone likes your biodata or you like someone's biodata you can directly contact their parent."
                    />
                    <WorkGuideline
                        imageSource="/hiw-success.svg"
                        title="Get married"
                        description="If you like the biodata and conversation, do your own inquiry & get married according to Sunnah."
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;