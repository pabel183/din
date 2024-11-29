"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

import { LingoSwitcher } from "./lingo-switcher";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { cn } from "@/lib/utils";


export const SidebarDropDownMenu = () => {
    const t = useTranslations();
    const pathname = usePathname();
    const [isBorder, setBorder] = useState(false);
    useEffect(() => {
        if (pathname === "/") {
            setBorder(false);
        }
        else {
            setBorder(true);
        }
    }, [pathname]);

    const routes = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About us",
            path: "/about"
        },
        {
            name: "FAQ",
            path: "/faq"
        },
        {
            name: "Guide",
            path: "/guide"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ];
    const [open, setOpen] = useState(false);

    return (
        <>
            <DropdownMenu open={open} onOpenChange={() => setOpen((preValue) => !preValue)} modal={false}>
                <DropdownMenuTrigger>
                    <GiHamburgerMenu className="size-6 text-neutral-700" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="absolute left-0 top-6 w-52 rounded-none lg:hidden"
                    side="bottom"
                    asChild
                >
                    <div className="w-52 p-8 h-[40rem] relative flex flex-col justify-start gap-8">
                        <div className=" flex flex-col justify-start gap-8">
                            {routes.map((route) => (
                                <Link
                                    className="text-neutral-600 text-md font-medium"
                                    href={route.path}
                                    key={route.name}
                                >{t(route.name)}</Link>
                            ))}
                        </div>
                        <div className="w-full relative flex gap-4 text-[#522c79]">
                            <div className="w-full flex pt-1">
                                <LingoSwitcher
                                    sidebarDropDownMenuIsOpen={true}
                                />
                            </div>
                        </div>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}