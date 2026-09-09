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
  { id: "1", src: "/cabana1.jpg", title: "Ventanales al Humedal", category: "Interiores" },
  { id: "2", src: "/cabana2.jpg", title: "Atardeceres Dorados", category: "Exterior" },
  { id: "3", src: "/cabana3.jpg", title: "Cabañas de Madera", category: "Arquitectura" },
  { id: "4", src: "/cabana4.jpg", title: "Fauna Silvestre", category: "Experiencias" },
  { id: "5", src: "/cabana2.jpg", title: "Refugio del Humedal", category: "Alojamiento" },
  { id: "6", src: "/cabana4.jpg", title: "Fauna Silvestre", category: "Experiencias" },
  { id: "7", src: "/cabana2.jpg", title: "Refugio del Humedal", category: "Alojamiento" },
];

export default function HorizontalScrollGallery({ images = GALLERY_IMAGES }: { images?: GalleryItem[] }) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const pinContainer = triggerRef.current;
      const horizontalContainer = sectionRef.current;

      if (!pinContainer || !horizontalContainer) return;

      const getScrollAmount = () => {
        const totalWidth = horizontalContainer.scrollWidth;
        const viewportWidth = window.innerWidth;
        return totalWidth - viewportWidth;
      };

      // 💡 Comprobación en Consola
      console.log("👉 ScrollWidth calculado:", horizontalContainer.scrollWidth);

      const animation = gsap.to(horizontalContainer, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: pinContainer,
          start: "top top", 
          end: () => `+=${getScrollAmount() * 1.2}`, // Otorga el espacio vertical necesario para avanzar todo X
          scrub: 1,
          pin: true,
          pinSpacing: true, // ⚠️ Garantiza que se genere el espacio hacia abajo para ver el Footer
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 💡 Resuelve el problema de imágenes que tardan en cargar sus dimensiones
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      return () => {
        clearTimeout(timer);
        animation.kill();
      };
    },
    { scope: triggerRef, dependencies: [images] }
  );

  return (
    // Compensación del Navbar con pt-20 / pt-24 en el contenedor principal
    <div ref={triggerRef} className="h-screen w-full bg-moss overflow-hidden pt-20 lg:pt-24 pb-6">
      <div className="h-full w-full flex flex-col justify-between relative">
        
        {/* Encabezado */}
        <div className="max-w-[1360px] w-full mx-auto px-6 lg:px-12 shrink-0">
          <span className="font-deco text-xs uppercase text-gold-line tracking-[0.25em] block mt-10 mb-1">
            Experiencia Unica
          </span>
          <h2 className="font-deco text-2xl sm:text-4xl text-sand-light tracking-wide uppercase">
            Galería de fotos
          </h2>
        </div>

        {/* Tira Horizontal */}
        <div className="w-full overflow-hidden my-auto">
          <div
            ref={sectionRef}
            className="flex flex-nowrap gap-6 lg:gap-8 pl-6 lg:pl-12 pr-[40vw] w-max items-center h-[50vh] sm:h-[58vh] will-change-transform"
          >
            {images.map((img) => (
              <div
                key={img.id}
                className="w-[75vw] sm:w-[420px] lg:w-[540px] h-full shrink-0 relative overflow-hidden group bg-moss-300 border border-gold-line/20 shadow-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 75vw, 540px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onLoad={() => ScrollTrigger.refresh()} // 💡 Fuerza el recálculo al terminar de cargar cada imagen
                />

                <div className="absolute inset-0 bg-gradient-to-t from-moss via-transparent to-transparent opacity-85 pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col justify-end z-10">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-line font-sans mb-1">
                    {img.category}
                  </span>
                  <h3 className="font-deco text-xl sm:text-2xl text-sand-light tracking-wide">
                    {img.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador Inferior */}
        <div className="max-w-[1360px] w-full mx-auto px-6 lg:px-12 shrink-0 flex items-center gap-2 text-sand/60 text-xs font-sans uppercase tracking-widest">
          <span className="material-symbols-outlined text-[18px] text-gold-line animate-pulse">
            south
          </span>
          <span>Desliza hacia abajo para explorar la galería</span>
        </div>

      </div>
    </div>
  );
}