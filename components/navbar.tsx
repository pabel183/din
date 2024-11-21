"use client";

import { GoPersonFill } from "react-icons/go";
import { FaBell } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";

import { LingoSwitcher } from "./lingo-switcher";


export const Navbar = () => {
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
  return (
    <div className={cn(`fix top-0 right-0 left-0 z-20 flex w-full justify-around md:h-24 sm:h-20 h-16 items-center `,
      isBorder ? "border-b shadow-md" : ""
    )}>
      <div className="lg:hidden flex">
        <GiHamburgerMenu className="size-6 text-neutral-700" />
      </div>
      <div className="relative h-full w-60 flex justify-center items-center ">
        <Link href="/">
          <Image
            className="object-fill h-full w-44"
            src="/20221205130621.svg"
            alt="logo"
            height="100"
            width="150"
          />
        </Link>
      </div>
      <div className="hidden lg:flex  gap-8">
        {routes.map((route) => (
          <Link
            className="text-neutral-600 text-md font-medium"
            href={route.path}
            key={route.name}
          >{t(route.name)}</Link>
        ))}
      </div>
      <div className="flex gap-4 text-[#522c79]">
        <div className="hidden lg:flex pt-1">
          <LingoSwitcher />
        </div>
        <div className="flex gap-4">
          <Link href="/user/account/notifications"><FaBell className="size-6" /></Link>
          <Link href="#"><GoPersonFill className="size-6" /></Link>
        </div>
      </div>
    </div>
  );
}