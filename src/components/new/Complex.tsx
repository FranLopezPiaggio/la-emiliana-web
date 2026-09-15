"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Home,
  Waves,
  TreePine,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Sparkles,
} from "lucide-react";

// Estructura de datos para las imágenes de la galería
export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  icon: "home" | "waves" | "lagoon" | "nature";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "cabanas",
    title: "Cabañas",
    category: "Alojamiento & Confort",
    src: "/entrada.jpg",
    alt: "Cabaña de madera rodeada de árboles y naturaleza",
    icon: "home",
  },
  {
    id: "pileta",
    title: "Pileta",
    category: "Recreación & Relax",
    src: "/entrada1.jpg",
    alt: "Piscina al aire libre rodeada de verde",
    icon: "waves",
  },
  {
    id: "lagunas",
    title: "Lagunas",
    category: "Entorno Natural",
    src: "/entrada.jpg",
    alt: "Vista panorámica del río y vegetación al atardecer",
    icon: "lagoon",
  },
  {
    id: "interiores",
    title: "Interiores Cálidos",
    category: "Alojamiento",
    src: "/entrada1.jpg",
    alt: "Interior rústico y acogedor de cabaña",
    icon: "home",
  },
  {
    id: "atardecer",
    title: "Atardeceres Únicos",
    category: "Experiencia",
    src: "/entrada.jpg",
    alt: "Cielo dorado sobre el bosque y el estanque",
    icon: "nature",
  },
];

export function ComplexSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isModalOpen = selectedIndex !== null;

  // Handlers de navegación del carrusel
  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Event Listeners para teclado y bloqueo de scroll
  useEffect(() => {
    if (!isModalOpen) return;

    // Bloquear scroll de la página al abrir el modal
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleClose, handlePrev, handleNext]);

  // Renderizador de iconos por categoría
  const renderIcon = (type: GalleryItem["icon"]) => {
    switch (type) {
      case "home":
        return <Home className="w-5 h-5 text-white" />;
      case "waves":
        return <Waves className="w-5 h-5 text-white" />;
      case "lagoon":
      case "nature":
      default:
        return <TreePine className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="complejo" className="relative w-full bg-[#f6f2e9] text-[#2c3e2e] py-16 md:py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* LADO IZQUIERDO: Texto e información editorial */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 pr-0 lg:pr-4">
          
          {/* Subtítulo de categoría */}
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-500">
            EL COMPLEJO
          </span>

          {/* Título Principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15] text-[#233325] font-normal">
            Un entorno natural <br className="hidden sm:inline" />
            pensado para disfrutar
          </h2>

          {/* Texto descriptivo */}
          <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed">
            La Emiliana es un complejo turístico dentro de una chacra, rodeado
            de naturaleza, con todo lo necesario para vivir una experiencia de
            descanso, recreación y conexión. Un lugar ideal para familias, grupos
            de amigos y también para quienes buscan invertir en turismo y
            desarrollo en la región.
          </p>

        </div>

        {/* LADO DERECHO: Bento Grid de imágenes */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 h-[520px] sm:h-[480px]">
          
          {/* TARJETA 1: Cabañas (Columna Izquierda / Alta) */}
          <div
            onClick={() => setSelectedIndex(0)}
            className="group relative cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full sm:col-span-1"
          >
            <Image
              src={GALLERY_ITEMS[0].src}
              alt={GALLERY_ITEMS[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Hover hint icon */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom Label Badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
              <div className="p-2 bg-white/20 backdrop-blur-md">
                {renderIcon(GALLERY_ITEMS[0].icon)}
              </div>
              <span className="text-lg font-serif font-medium tracking-wide">
                {GALLERY_ITEMS[0].title}
              </span>
            </div>
          </div>

          {/* COLUMNA DERECHA DEL BENTO (2 Tarjetas Apiladas) */}
          <div className="grid grid-rows-2 gap-4 h-full sm:col-span-1">
            
            {/* TARJETA 2: Pileta */}
            <div
              onClick={() => setSelectedIndex(1)}
              className="group relative cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full"
            >
              <Image
                src={GALLERY_ITEMS[1].src}
                alt={GALLERY_ITEMS[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 text-white">
                <div className="p-1.5 bg-white/20 backdrop-blur-md">
                  {renderIcon(GALLERY_ITEMS[1].icon)}
                </div>
                <span className="text-base font-serif font-medium tracking-wide">
                  {GALLERY_ITEMS[1].title}
                </span>
              </div>
            </div>

            {/* TARJETA 3: Lagunas */}
            <div
              onClick={() => setSelectedIndex(2)}
              className="group relative cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full"
            >
              <Image
                src={GALLERY_ITEMS[2].src}
                alt={GALLERY_ITEMS[2].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 text-white">
                <div className="p-1.5 bg-white/20 backdrop-blur-md">
                  {renderIcon(GALLERY_ITEMS[2].icon)}
                </div>
                <span className="text-base font-serif font-medium tracking-wide">
                  {GALLERY_ITEMS[2].title}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ========================================== */}
      {/* MODAL / CARROUSEL DE GALERÍA (LIGHTBOX)    */}
      {/* ========================================== */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/92 backdrop-blur-md text-white animate-fade-in transition-all">
          
          {/* BARRA SUPERIOR DEL MODAL */}
          <div className="p-6 flex items-center justify-between z-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400">
                {GALLERY_ITEMS[selectedIndex].category}
              </p>
              <h3 className="text-xl font-serif text-stone-100">
                {GALLERY_ITEMS[selectedIndex].title}
              </h3>
            </div>

            <div className="flex items-center gap-6">
              {/* Contador */}
              <span className="text-sm font-mono text-stone-400">
                {selectedIndex + 1} / {GALLERY_ITEMS.length}
              </span>

              {/* Botón Cerrar */}
              <button
                onClick={handleClose}
                className="p-2.5 mt-20 bg-white-600/80 hover:bg-white-600 text-white transition-all focus:outline-none shadow-md hover:scale-105 active:scale-95"
                aria-label="Cerrar galería"
              >
                <X className="w-6 h-6 color-black" />
              </button>
            </div>
          </div>

          {/* VISTA PRINCIPAL DE LA IMAGEN + NAVEGACIÓN */}
          <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 my-auto">
            
            {/* Flecha Izquierda */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-20 p-3 bg-black/40 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all focus:outline-none"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Contenedor Imagen Activa */}
            <div className="relative w-full max-w-5xl h-[60vh] md:h-[72vh] overflow-hidden shadow-2xl">
              <Image
                src={GALLERY_ITEMS[selectedIndex].src}
                alt={GALLERY_ITEMS[selectedIndex].alt}
                fill
                priority
                className="object-contain transition-all duration-300"
              />
            </div>

            {/* Flecha Derecha */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-20 p-3 bg-black/40 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all focus:outline-none"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* TIRA INFERIOR DE THUMBNAILS (MINIATURAS) */}
          <div className="p-6 flex justify-center items-center gap-3 overflow-x-auto z-10">
            {GALLERY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(idx)}
                className={`relative w-16 h-12 md:w-20 md:h-14 overflow-hidden border-2 transition-all shrink-0 ${
                  idx === selectedIndex
                    ? "border-white scale-105 opacity-100"
                    : "border-transparent opacity-40 hover:opacity-80"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      )}
    </section>
  );
}