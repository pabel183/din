"use client";

import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
export const Footer = () => {
    const YoutubeLink = "https://www.youtube.com/OrdhekDeen";
    function handleYoutubeIconClick() {
        window.open(YoutubeLink, "_blank");
    }
    const FacebookLink = "https://www.facebook.com/OrdhekDeen/";
    function handleFacebookIconClick() {
        window.open(FacebookLink, "_blank");
    }

    return (
        <footer>
            <div className="
            h-full gap-6 w-full flex flex-col justify-center items-center py-10
            bg-[#522c79] text-neutral-50
            ">
                <div className="flex flex-col items-center sm:flex-row gap-5 text-sm font-medium">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Refund Policy</p>
                </div>
                <div className="flex justify-between gap-5">
                    <IoLogoFacebook onClick={handleFacebookIconClick} className="cursor-pointer size-7 font-semibold text-neutral-50 rounded-3xl" />
                    <FaYoutube onClick={handleYoutubeIconClick} className="cursor-pointer size-7 font-semibold text-neutral-50 rounded-xl" />
                </div>
                <div className="flex flex-col items-center sm:flex-row gap-5 ">
                    <p className="text-base font-medium">@ 2024-2025 ordhekdin.com</p>
                </div>
            </div>
        </footer>
    );
}