import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa"; // Pastikan sudah install react-icons
import { Menu, X} from "lucide-react";

export const Navbar = () => {
    const isActive = (path: string) => {
        if (typeof window !== "undefined") {
            return window.location.pathname === path;
        }
        return false;
    };
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex h-20 items-center justify-between gap-8 px-6 sm:px-6 bg-[#1C1B1C]">
            <div className="flex cursor-pointer text-2xl align-items-center pl-8 text-[#a0a0a0] font-semibold">
                <a href="/">
                    <span className="font-bold text-white">Kaiden.
                        <span className="text-[#a0a0a0]">dev</span>
                    </span>
                </a>
            </div>

            {/* Desktop Items */}
            <div className="hidden font-semibold md:flex gap-8 pr-8 items-center ">
                <a
                    className={`transition duration-500 px-3 py-2 rounded-full hover:bg-[#3a3a3a] ${isActive("/") ? "text-white" : "text-[#a0a0a0]"}`}
                    href="/"
                >
                    Home
                </a>
                <a
                    className={`transition duration-500 px-3 py-2 rounded-full hover:bg-[#3a3a3a] ${isActive("/About") ? "text-white" : "text-[#a0a0a0]"}`}
                    href="/About"
                >
                    About
                </a>
                <a
                    className={`transition duration-500 px-3 py-2 rounded-full hover:bg-[#3a3a3a] ${isActive("/Project") ? "text-white" : "text-[#a0a0a0]"}`}
                    href="/Project"
                >
                    Project
                </a>
                <a
                    className={`transition duration-500 px-3 py-2 rounded-full hover:bg-[#3a3a3a] ${isActive("/Contact") ? "text-white" : "text-[#a0a0a0]"}`}
                    href="/Contact"
                >
                    Contact
                </a>
            </div>
            
            {/* Button */}
            <button
                className="cursor-pointer md:hidden py-3 px-3 text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu">
                {menuOpen ? <X color="#ffffff"/> : <Menu color="#ffffff" />}
            </button>

            {/* Mobile Items */}
            {menuOpen && (
                <div className="fixed font-light top-18 left-0 w-full h-full bg-[#0D0D0D] flex flex-col text-2xl text-left gap-6 py-6 px-6 md:hidden z-50">
                    <a
                        className={`transition duration-300 hover:text-white ${isActive("/") ? "text-white" : "text-[#a0a0a0]"}`}
                        href="/"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        className={`transition duration-300 hover:text-white ${isActive("/About") ? "text-white" : "text-[#a0a0a0]"}`}
                        href="/About"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        className={`transition duration-300 hover:text-white ${isActive("/Project") ? "text-white" : "text-[#a0a0a0]"}`}
                        href="/Project"
                        onClick={() => setMenuOpen(false)}
                    >
                        Project
                    </a>
                    <a
                        className={`transition duration-300 hover:text-white ${isActive("/Contact") ? "text-white" : "text-[#a0a0a0]"}`}
                        href="/Contact"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            )}
        </div>
    );
};