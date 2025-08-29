import { useEffect, useState } from "react";
import { Menu, X} from "lucide-react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if(!menuOpen) return;
        const handleScroll = () => setMenuOpen(false);
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)}, [menuOpen])
    ;

    const isActive = (path: string) => {
        if (typeof window !== "undefined") {
            return window.location.pathname === path;
        }
        return false;
    };

    return (
        <header className="flex fixed top-0 left-0 h-16 w-full items-center justify-between gap-6 px-6 sm:px-10 bg-[#1C1B1C]">
            <div className="flex cursor-pointer text-2xl align-items-center text-[#a0a0a0] font-semibold">
                <a href="/">
                    <span className="font-semibold text-white px-3 py-3">Kaiden.
                        <span className="text-[#a0a0a0]">dev</span>
                    </span>
                </a>
            </div>

            {/* Desktop Items */}
            <nav className="hidden font-light md:flex gap-6 items-center text-m">
                <ul className="flex gap-6">
                    <li>
                        <a
                            className={`transition duration-300 px-3 py-2 rounded-full hover:bg-[#3a3a3a] hover:text-white ${isActive("/") ? "text-white" : "text-[#a0a0a0]"}`}
                            href="/"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className={`transition duration-300 px-3 py-2 rounded-full hover:bg-[#3a3a3a] hover:text-white ${isActive("/about") ? "text-white" : "text-[#a0a0a0]"}`}
                            href="/about"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className={`transition duration-300 px-3 py-2 rounded-full hover:bg-[#3a3a3a] hover:text-white ${isActive("/project") ? "text-white" : "text-[#a0a0a0]"}`}
                            href="/project"
                        >
                            Project
                        </a>
                    </li>
                    <li>
                        <a
                            className={`transition duration-300 px-3 py-2 rounded-full hover:bg-[#3a3a3a] hover:text-white ${isActive("/contact") ? "text-white" : "text-[#a0a0a0]"}`}
                            href="/contact"
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            className={`transition duration-300 py-2 px-4 rounded-xl text-black bg-white hover:text-[#b8b8b8] ${isActive("/blog")}`}
                            href="/blog"
                        >
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
            
            {/* Button */}
            <button
                className="cursor-pointer md:hidden py-2 px-2 text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu">
                {menuOpen ? <X color="#ffffff"/> : <Menu color="#ffffff" />}
            </button>

            {/* Mobile Items */}
            {menuOpen && (
                <nav className="fixed font-light top-16 left-0 w-full h-200px bg-[#363636] flex flex-col text-2xl text-left gap-6 py-6 px-4 md:hidden rounded-xl">
                    <ul className="flex flex-col gap-6">
                        <li>
                            <a
                                className={`transition duration-300 hover:text-white ${isActive("/") ? "text-white" : "text-[#a0a0a0]"}`}
                                href="/"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className={`transition duration-300 hover:text-white ${isActive("/about") ? "text-white" : "text-[#a0a0a0]"}`}
                                href="/about"
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className={`transition duration-300 hover:text-white ${isActive("/project") ? "text-white" : "text-[#a0a0a0]"}`}
                                href="/project"
                                onClick={() => setMenuOpen(false)}
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                className={`transition duration-300 hover:text-white ${isActive("/contact") ? "text-white" : "text-[#a0a0a0]"}`}
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};