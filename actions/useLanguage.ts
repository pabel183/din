"use server";
import { cookies } from "next/headers";

export const useLanguage=async(lang:string)=>{
  const cookieStore=await cookies();

        cookieStore.set("language",lang)
}