"use client";
import { IoLanguage } from "react-icons/io5";

import { useLanguage } from "@/actions/useLanguage";

import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ChevronDown } from "lucide-react";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LingoSwitcherProps {
    sidebarDropDownMenuIsOpen?: boolean;
}

export const LingoSwitcher: React.FC<LingoSwitcherProps> = ({
    sidebarDropDownMenuIsOpen = false,
}) => {
    const t = useTranslations("navbar");
    const [isHoverOnBangla, setIsHoverOnBangla] = useState(false);
    const [isHoverOnEnglish, setIsHoverOnEnglish] = useState(false);

    return (
        <div className="w-fit z-20">
            <HoverCard openDelay={100}>
                <HoverCardTrigger >
                    <div className="cursor-pointer flex w-fit items-center text-sm font-medium text-[#483285]">
                        <IoLanguage className="size-6 " />
                        <h3>{t("Language")}</h3>
                        <ChevronDown className="size-6 pt-1" />
                    </div>
                </HoverCardTrigger>
                <HoverCardContent
                    className={cn("p-0 w-28 rounded-sm",
                        sidebarDropDownMenuIsOpen && "w-52 border-none shadow-none"
                    )}
                    asChild
                    side="bottom"
                    sideOffset={sidebarDropDownMenuIsOpen ? 0 : 30}
                    align="end"
                >
                    <div className={cn("flex flex-col justify-start py-4 ",
                        sidebarDropDownMenuIsOpen && "justify-between p-4 pt-8 gap-6"
                    )}>
                        <Button
                            className={cn("h-6 justify-start", isHoverOnEnglish ? "text-[#371a52]" : "text-[#483285]")}
                            variant="ghost"
                            size="sm"
                            onClick={() => useLanguage("en")}
                            onMouseEnter={() => setIsHoverOnEnglish(true)}
                            onMouseLeave={() => setIsHoverOnEnglish(false)}
                        >English</Button>
                        <Button
                            className={cn("h-6 justify-start", isHoverOnBangla ? "text-[#371a52]" : "text-[#483285]")}
                            variant="ghost"
                            size="sm"
                            onClick={() => useLanguage("bn")}
                            onMouseEnter={() => setIsHoverOnBangla(true)}
                            onMouseLeave={() => setIsHoverOnBangla(false)}
                        >{t("Bangla")}</Button>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}