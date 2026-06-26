"use client";

import Image from "next/image";
import { useState } from "react";
import { IMG } from "@/constants/images";

const links = [
  { name: "Home", href: "#home" },
  { name: "Plants Type", href: "#plants", dropdown: true },
  { name: "More", href: "#more" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="page-wrap relative h-[72px] flex items-center">
        <a href="#home" className="flex items-center gap-2 z-10">
          <Image src={IMG.logo} alt="FloraVision logo" width={32} height={32} />
          <span className="text-white font-bold text-lg">FloraVision.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-white/90 text-sm flex items-center gap-1">
                {item.name}
                {item.dropdown && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 ml-auto z-10">
          <button type="button" aria-label="Search" className="text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button type="button" aria-label="Cart" className="text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="text-white lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <button type="button" aria-label="Menu" className="text-white hidden lg:block">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="15" y2="16" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="page-wrap pb-4 lg:hidden">
          <div className="glass rounded-2xl p-4">
            <ul>
              {links.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/90 text-sm block py-2" onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
