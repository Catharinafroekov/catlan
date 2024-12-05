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
                <Link href="/"><img src="/img/ravn.svg" alt="ravn ikon" className="h-8 w-auto" /></Link>

                {/* Burger Button */}
                <button className="text-black" onClick={toggleMenu}>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </nav>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <ul className="fixed top-20 left-0 right-0 bottom-0 flex flex-col items-center gap-10 bg-blue text-black p-4 space-y-2 h-screen z-[100]">
                    <li className="mt-10">
                        <Link href="/" className="hover:underline hover:text-lilla text-4xl">Home</Link>
                    </li>
                    <li>
                        <Link href="/program" className="hover:underline hover:text-lilla text-4xl">Program</Link>
                    </li>
                    <li>
                        <Link href="/ticket" className="hover:underline hover:text-lilla text-4xl">Tickets</Link>
                    </li>
                    <li>
                        <Link href="/lineup" className="hover:underline hover:text-lilla text-4xl">Lineup</Link>
                    </li>
                </ul>
            )}
        </header>

    );
}

export default Navigation;
