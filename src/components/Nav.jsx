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
            <nav className="flex justify-between items-center p-5 bg-blue-100">
                {/* Logo */}
                <img src="/img/ravn.svg" alt="ravn ikon" className="h-8 w-auto" />

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
                <ul className="flex flex-col items-start bg-blue-100 text-black p-4 space-y-2">
                    <li>
                        <Link href="/" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="/program" className="hover:underline">Program</Link>
                    </li>
                    <li>
                        <Link href="/ticket" className="hover:underline">Tickets</Link>
                    </li>
                    <li>
                        <Link href="/lineup" className="hover:underline">Lineup</Link>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Navigation;
