import {Footer} from "@/components/footer";
import { Navbar } from "@/components/navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
}) => {
    return (
        <div className="flex flex-col w-full justify-between">
            <Navbar />
            <main className="flex ">
                {children}
            </main>
            <Footer />
        </div>
    );
}
export default DashboardLayout;