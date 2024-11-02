"use client";

import {useLanguage} from "@/actions/useLanguage";

import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";


export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const t = useTranslations();

  if (!isClient) {
    return null;
  }

  return (
    <div className="h-full pt-8 ">

      <HoverCard>
        <HoverCardTrigger>
          <div>triger on hover</div>
        </HoverCardTrigger>
        <HoverCardContent>
        <div>
          <Button onClick={()=>useLanguage("en")}>English</Button>
          <Button onClick={()=>useLanguage("bn")}>Bangla</Button>
        </div>
        </HoverCardContent>
      </HoverCard>

      
      {t("title")}
    </div>
  );
}
