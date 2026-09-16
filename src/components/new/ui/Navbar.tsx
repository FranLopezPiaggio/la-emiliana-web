"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // npm install lucide-react
import { getWhatsappUrl } from "@/lib/whatsapp";

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Inicio", href: "#inicio", active: true },
  { label: "El complejo", href: "#complejo" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Galería", href: "#complejo" },
  { label: "Inversión", href: "#contacto" },
  { label: "Ubicación", href: "#ubicacion" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 transition-all">      
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* Reemplaza con tu logo SVG o PNG */}
          <div className="flex flex-col text-[#2c3e2e]">
            <span className="text-xl md:text-2xl font-serif font-semibold tracking-wide">
              La Emiliana
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-light text-stone-600">
              Naturaleza · Descanso
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm tracking-wide transition-colors relative py-1 ${
                link.active
                  ? "text-stone-900 font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-stone-800"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call To Action Button — ponytail: direct wa.me generic, no modal */}
        <div className="hidden lg:block">
          <Link
            href={getWhatsappUrl("generic")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2c3e2e] hover:bg-[#212f23] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm"
          >
            Quiero más información
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-stone-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-stone-200 px-6 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base text-stone-700 hover:text-stone-900 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href={getWhatsappUrl("generic")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#2c3e2e] text-white text-sm font-medium py-3 rounded-full"
            >
              Quiero más información
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}