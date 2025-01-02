"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <header>
            <nav className="flex justify-between items-center p-5">
                {/* Logo */}
                <Link href="/"><img src="/img/ravn.svg" alt="ravn ikon" className="h-14 w-auto" /></Link>

                {/* Burger Button */}
                <button className="text-black" onClick={toggleMenu}>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 25 25"
                        className="w-10 h-6"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>

            {/* Dropdown Menu */}
            <div className={`fixed top-20 left-0 w-full h-screen bg-blue text-black p-4 z-[100] transform transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col items-center gap-4 mt-20">
                    <li className="flex flex-col items-center">
                        <Link href="/" className=" hover:text-lilla text-4xl">Home</Link>
                        <hr style={{ width: '400px' }} className="border-t border-black my-4" />
                    </li>
                    <li className="flex flex-col items-center">
                        <Link href="/program" className=" hover:text-lilla text-4xl">Program</Link>
                        <hr style={{ width: '400px' }} className="border-t border-black my-4" />
                    </li>
                    <li className="flex flex-col items-center">
                        <Link href="/ticket" className=" hover:text-lilla text-4xl">Tickets</Link>
                        <hr style={{ width: '400px' }} className="border-t border-black my-4" />
                    </li>
                    <li className="flex flex-col items-center">
                        <Link href="/lineup" className=" hover:text-lilla text-4xl">Lineup</Link>
                        <hr style={{ width: '400px' }} className="border-t border-black my-4" />
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navigation;
