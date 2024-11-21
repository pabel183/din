import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

interface HomePageLayoutProps {
    children: React.ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({
    children,
}) => {
    return (
        <div className="bg-[#fafafc]  flex flex-col justify-between gap-0">
            <div className="flex flex-col justify-between gap-0">
                <div className="w-full">
                    <Image
                        className="aspect-auto object-cover h-[1120px] hidden md:block"
                        src="/bg.svg"
                        alt="bg-Image"
                        width={2048}
                        height={2048}
                    />
                    <Image
                        className="aspect-auto object-cover block md:hidden"
                        src="/bg-mobile.svg"
                        alt="bg-Image"
                        width={2048}
                        height={2048}
                    />
                </div>
                <div className="absolute top-0 right-0 left-0 w-full h-full">
                    <div className="flex flex-col justify-between gap-8 md:gap-16">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageLayout;