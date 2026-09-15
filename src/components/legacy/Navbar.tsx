"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20 transition-all duration-300">
      <div className="h-20 max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="relative w-25 h-25 mt-10 ml-20 rounded-full overflow-hidden border border-gold-line/30 shrink-0">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="La Emiliana Logo"
              fill
              sizes="80px"
              /*
                - object-cover: mantiene la proporción sin deformar.
                - object-[center_bottom]: empuja el enfoque al borde inferior.
                - Para ajuste milimétrico usa porcentajes como: object-[50%_75%]
              */
              className="object-cover object-[center_bottom]"
            />
          </Link>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/galeria" className="text-xs uppercase tracking-[0.2em] text-moss/80 hover:text-moss-light transition-colors font-sans">
            Galeria
          </Link>
          {/* <Link href="/reservas" className="text-xs uppercase tracking-[0.2em] text-moss/80 hover:text-moss-light transition-colors font-sans">
            Reservas
          </Link> */}
          <Link href="/historia" className="text-xs uppercase tracking-[0.2em] text-moss/80 hover:text-moss-light transition-colors font-sans">
            Historia
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-1.5 text-moss/70 text-xs font-sans tracking-widest">
            <button type="button" className="text-moss-light font-semibold cursor-pointer">
              ES
            </button>
          </div>
          <Link
            href=""
            className="hidden sm:inline-flex items-center justify-center bg-terracotta text-sand-light px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-medium shadow-md hover:bg-terracotta-hover transition-all duration-300 border border-gold-line/30"
          >
            Contacto
          </Link>
          {/* Burger - mobile only */}
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gold-line/20 text-moss hover:bg-moss/5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px] leading-none">{open ? "close" : "menu"}</span>
          </button>
        </div>

      </div>
      {/* Mobile dropdown - ponytail: sin focus-trap/lock-scroll/animación GSAP, agregar Radix Dialog + body overflow hidden + GSAP si hace falta fullscreen/a11y avanzada */}
      {open && (
        <nav className="md:hidden absolute top-20 inset-x-0 bg-white/95 backdrop-blur-md border-t border-gold-line/15 shadow-lg">
          <div className="flex flex-col px-6 py-6 gap-5">
            <Link onClick={() => setOpen(false)} href="/galeria" className="text-xs uppercase tracking-[0.2em] text-moss/80 hover:text-moss-light transition-colors font-sans py-2">
              Galeria
            </Link>
            <Link onClick={() => setOpen(false)} href="/reservas" className="text-xs uppercase tracking-[0.2em] text-moss/80 hover:text-moss-light transition-colors font-sans py-2">
              Reservas
            </Link>
            <Link onClick={() => setOpen(false)} href="/historia" className="text-xs uppercase tracking-[0.2em] text-moss/80 hover:text-moss-light transition-colors font-sans py-2">
              Historia
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href=""
              className="mt-2 inline-flex items-center justify-center bg-terracotta text-sand-light px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] font-medium shadow-md hover:bg-terracotta-hover transition-colors border border-gold-line/30 sm:hidden"
            >
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </header>
  </>
  );
}