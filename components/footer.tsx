"use client";

import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
export const Footer = () => {
    return (
        <footer>
            <div className="
            h-full gap-4 w-full flex flex-col justify-center items-center py-10
            bg-[#522c79] text-neutral-50
            ">
                <div className="flex flex-col items-center sm:flex-row gap-4 text-xs font-medium">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Refund Policy</p>
                </div>
                <div className="flex justify-between gap-4">
                    <IoLogoFacebook className="size-6 font-semibold text-neutral-50 rounded-2xl"/>
                    <FaYoutube className="size-6 font-semibold text-neutral-50 rounded-2xl"/>
                </div>
                <div className="flex flex-col items-center sm:flex-row gap-4 ">
                    <p className="text-sm font-medium">@ 2024-2025 ordhekdin.com</p>
                </div>
            </div>
        </footer>
    );
}