// src/components/HorizontalScrollGallery.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export interface GalleryItem {
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
    title: "Atardeceres Dorados",
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
  {
    id: "5",
    src: "/cabana2.jpg",
    title: "Refugio del Humedal",
    category: "Alojamiento",
  },
  {
    id: "6",
    src: "/cabana4.jpg",
    title: "Fauna Silvestre",
    category: "Experiencias",
  },
  {
    id: "7",
    src: "/cabana2.jpg",
    title: "Refugio del Humedal",
    category: "Alojamiento",
  },
];

interface HorizontalScrollGalleryProps {
  images?: GalleryItem[];
}

export default function HorizontalScrollGallery({
  images = GALLERY_IMAGES,
}: HorizontalScrollGalleryProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const pinContainer = triggerRef.current;
      const horizontalContainer = sectionRef.current;

      if (!pinContainer || !horizontalContainer) return;

      // Función que calcula la distancia exacta a trasladar en X
      const getScrollAmount = () => {
        const totalWidth = horizontalContainer.scrollWidth;
        const viewportWidth = window.innerWidth;
        return Math.max(0, totalWidth - viewportWidth);
      };

      const animation = gsap.to(horizontalContainer, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: pinContainer,
          start: "top top",
          // 💡 Amplificamos la distancia vertical (x 1.25) para darle más tiempo de lectura en el eje Y
          end: () => `+=${getScrollAmount() * 1.25}`,
          scrub: 1.2, // Suavizado de inercia
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalcula si cambia el viewport
        },
      });

      return () => {
        animation.kill();
      };
    },
    { scope: triggerRef, dependencies: [images] }
  );

  return (
    // Espaciado vertical (py-12 lg:py-20) para dar aire a la sección completa
    <div ref={triggerRef} className="overflow-hidden bg-moss py-12 lg:py-20">
      <div className="h-screen w-full flex flex-col justify-center relative overflow-hidden">
        
        {/* Encabezado superior */}
        <div className="max-w-[1360px] w-full mx-auto px-6 lg:px-12 pt-6 pb-6">
          <span className="font-deco text-xs uppercase text-gold-line tracking-[0.25em] block mb-2">
            Experiencia Inmersiva
          </span>
          <h1 className="font-deco text-3xl sm:text-5xl text-sand-light tracking-wide uppercase">
            Galería de la Reserva
          </h1>
        </div>

        {/* Tira Horizontal:
            💡 Usamos pl-6 lg:pl-12 (inicio) y pr-[20vw] (final).
            El padding-right de 20vw crea el margen de seguridad para que la última imagen llegue con espacio. */}
        <div
          ref={sectionRef}
          className="flex gap-8 pl-6 lg:pl-12 pr-[20vw] w-max items-center h-[60vh] lg:h-[65vh] will-change-transform"
        >
          {images.map((img) => (
            <div
              key={img.id}
              className="w-[80vw] sm:w-[480px] lg:w-[600px] h-full shrink-0 relative rounded-2xl overflow-hidden group bg-moss-300 border border-gold-line/20 shadow-2xl"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 80vw, 600px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Degradado inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-moss via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Detalle del ítem */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end z-10">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-line font-sans mb-1">
                  {img.category}
                </span>
                <h2 className="font-deco text-2xl sm:text-3xl text-sand-light tracking-wide">
                  {img.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de Desplazamiento */}
        <div className="max-w-[1360px] w-full mx-auto px-6 lg:px-12 pt-6 pb-4 flex items-center gap-2 text-sand/60 text-xs font-sans uppercase tracking-widest">
          <span className="material-symbols-outlined text-[18px] text-gold-line animate-pulse">
            south
          </span>
          <span>Desliza hacia abajo para explorar la galería</span>
        </div>

      </div>
    </div>
  );
}