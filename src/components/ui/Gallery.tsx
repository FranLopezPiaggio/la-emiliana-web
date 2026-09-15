"use client";

import { useState } from "react";
import Image from "next/image";
import { Home, Waves, Trees, X, ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  {
    src: "/images/cabanas.jpg",
    alt: "Cabañas",
    label: "Cabañas",
    icon: Home,
    // La primera ocupa toda la columna izquierda del bento (row-span-2)
    bentoClass: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/pileta.jpg",
    alt: "Pileta",
    label: "Pileta",
    icon: Waves,
    bentoClass: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/images/lagunas.jpg",
    alt: "Lagunas",
    label: "Lagunas",
    icon: Trees,
    bentoClass: "md:col-span-1 md:row-span-1",
  },
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! === 0 ? IMAGES.length - 1 : prev! - 1));
    }
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! === IMAGES.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Columna Izquierda: Contenido */}
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
            EL COMPLEJO
          </span>
          <h2 className="mt-2 font-serif text-4xl text-stone-800">
            Un entorno natural pensado para disfrutar
          </h2>
          <p className="mt-6 leading-relaxed text-stone-600">
            La Emiliana es un complejo turístico dentro de una chacra, rodeado de
            naturaleza, con todo lo necesario para vivir una experiencia de descanso,
            recreación y conexión. Un lugar ideal para familias, grupos de amigos y
            también para quienes buscan invertir en turismo y desarrollo en la región.
          </p>
          <div className="mt-8 h-0.5 w-16 bg-stone-400" />
        </div>

        {/* Columna Derecha: Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-7">
          {IMAGES.map((img, idx) => {
            const Icon = img.icon;
            return (
              <button
                key={img.label}
                onClick={() => openLightbox(idx)}
                className={`group relative overflow-hidden bg-stone-200 text-left transition-transform duration-300 hover:scale-[1.01] ${img.bentoClass} h-64 sm:h-80 md:h-auto`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/30 px-3 py-1.5 text-white backdrop-blur-md">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{img.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
          {/* Botón Cerrar */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Cerrar modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Botón Anterior */}
          <button
            onClick={prevImage}
            className="absolute left-4 bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Imagen Activa */}
          <div className="relative max-h-[85vh] max-w-[90vw] overflow-hidden">
            <img
              src={IMAGES[selectedIndex].src}
              alt={IMAGES[selectedIndex].alt}
              className="max-h-[85vh] w-auto max-w-[90vw] object-contain"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 px-3 py-1.5 text-white backdrop-blur-md">
              {(() => {
                const Icon = IMAGES[selectedIndex].icon;
                return <Icon className="h-4 w-4" />;
              })()}
              <span className="text-sm font-medium">
                {IMAGES[selectedIndex].label}
              </span>
            </div>
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={nextImage}
            className="absolute right-4 bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
}