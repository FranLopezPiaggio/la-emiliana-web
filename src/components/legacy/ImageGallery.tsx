// src/components/ImageGallery.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "1",
    src: "/cabana1.jpg",
    title: "Ventanales al Humedal",
    category: "Interiores",
  },
  {
    id: "2",
    src: "/cabana2.jpg",
    title: "Atardecer Dorados",
    category: "Exterior",
  },
  {
    id: "3",
    src: "/cabana3.jpg",
    title: "Cabañas de Madera",
    category: "Arquitectura",
  },
  {
    id: "4",
    src: "/cabana4.jpg",
    title: "Fauna Silvestre",
    category: "Experiencias",
  },
];

export default function ImageGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75; // Desplaza el 75% del ancho del contenedor

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 bg-moss text-sand min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 w-full">
        
        {/* Encabezado y Botones de Navegación */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="font-deco text-xs uppercase text-gold-line tracking-[0.25em] block mb-2">
              Registro Visual
            </span>
            <h1 className="font-deco text-3xl sm:text-5xl text-sand-light tracking-wide uppercase">
              Galería de la Reserva
            </h1>
          </div>

          {/* Flechas de Control */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              type="button"
              aria-label="Desplazar a la izquierda"
              className="w-12 h-12 rounded-full border border-gold-line/30 bg-moss-300 flex items-center justify-center text-sand-light hover:bg-terracotta hover:border-terracotta transition-all duration-300 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
            </button>
            <button
              onClick={() => scroll("right")}
              type="button"
              aria-label="Desplazar a la derecha"
              className="w-12 h-12 rounded-full border border-gold-line/30 bg-moss-300 flex items-center justify-center text-sand-light hover:bg-terracotta hover:border-terracotta transition-all duration-300 cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Carrusel de Scroll Horizontal */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-2 transition-all"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="snap-center shrink-0 w-[85vw] sm:w-[450px] lg:w-[550px] relative rounded-2xl overflow-hidden group bg-moss-300 border border-gold-line/20 shadow-xl"
            >
              {/* Contenedor con Aspect Ratio de la Imagen */}
              <div className="relative h-[480px] sm:h-[560px] w-full">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 85vw, 550px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Blends & Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-moss via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Información al Pasar el Cursor o Permanentes en Mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end z-10">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-line font-sans mb-1">
                    {img.category}
                  </span>
                  <h2 className="font-deco text-2xl text-sand-light tracking-wide">
                    {img.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}