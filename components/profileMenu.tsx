"use client"

import Link from "next/link";
import Image from "next/image";
import { GoPersonFill } from "react-icons/go";
import { useRouter } from "next/navigation";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export const ProfileMenu = () => {
    const router = useRouter();
    const routes = [
        {
            route: "/user/account/dashboard",
            Icon: "/profile-menu-images/dashboard-ico.svg",
            name: "Dashboard"
        },
        {
            route: "/user/account/pledge",
            Icon: "/profile-menu-images/editbiodata-ico.svg",
            name: "Edit Biodata"
        },
        {
            route: "/user/account/short-list",
            Icon: "/profile-menu-images/shortlist-ico.svg",
            name: "Short list"
        },
        {
            route: "/user/account/ignore-list",
            Icon: "/profile-menu-images/ignorelist-ico.svg",
            name: "Ignore list"
        },
        {
            route: "/user/account/my-purchased",
            Icon: "/profile-menu-images/mypurchased-ico.svg",
            name: "My purchased"
        },
        {
            route: "/user/account/support-report",
            Icon: "/profile-menu-images/support-ico.svg",
            name: "Support & Report"
        },
        {
            route: "/user/account/settings",
            Icon: "/profile-menu-images/settings-ico.svg",
            name: "Settings"
        },
        {
            route: "/login-selection",
            Icon: "/profile-menu-images/logout-ico.svg",
            name: "Logout"
        },
    ];

    const logoutHandler = (data: { name: string, route: string }) => {
        router.push(`/${data.route}`);
    }

    return (
        <div>
            <HoverCard>
                <HoverCardTrigger>
                    <Link href="#"><GoPersonFill className="size-6" /></Link>
                </HoverCardTrigger>
                <HoverCardContent
                    className="w-64 rounded-sm p-8 absolute top-12 right-0 translate-x-10"
                    side="left"
                    asChild
                >
                    <div className="flex flex-col justify-center items-start gap-10">
                        <div className="relative w-full flex flex-col justify-between gap-4 items-center">
                            <div className="flex flex-col justify-between items-center gap-2">
                                {/* Dynamic info will should be from backend */}
                                <Avatar>
                                    <AvatarImage src="/profile-menu-images/avatar.svg" />
                                </Avatar>
                                <div className="w-full text-sm flex flex-col justify-between gap-1 items-center">
                                <p className="text-gray-400">Biodata Status</p>
                                <p className="px-2 rounded-sm font-bold text-white bg-neutral-300">NOT CREATED</p>
                                </div>
                            </div>
                            <div>
                                <Button
                                    className="w-40 text-md font-medium rounded-full bg-gradient-to-r
                                     from-[#522c79] to-[#e92f83] transition ease-in-out
                                   ">
                                    My Biodata
                                </Button>
                            </div>
                        </div>
                        <div className="w-full"><ul className="w-full flex flex-col justify-between items-start gap-4">
                            {
                                routes.map((data) => (
                                    data.name === "logout" ?
                                        (<li
                                            className="w-full grayscale hover:grayscale-0 text-gray-400 hover:text-[#522c79]  flex justify-start items-center gap-4"
                                            onClick={() => logoutHandler({ name: data.name, route: data.route })}
                                            key={data.name}>
                                            <Image
                                                className="size-4 fill-current text-neutral-400"
                                                alt={data.name}
                                                src={data.Icon}
                                                width={40}
                                                height={40}
                                            />
                                            <p className="text-[#7c838e]">{data.name}</p>
                                        </li>
                                        ) :
                                        (<Link className="w-full px-0" href={data.route}>
                                            <li
                                            className="w-full grayscale hover:grayscale-0 text-gray-400 hover:text-[#522c79]  flex justify-start items-center gap-4"
                                            key={data.name}>
                                                <Image
                                                    className=" size-4"
                                                    alt={data.name}
                                                    src={data.Icon}
                                                    width={40}
                                                    height={40}
                                                />
                                                <p>{data.name}</p>
                                            </li>
                                        </Link>)
                                ))
                            }
                        </ul></div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}