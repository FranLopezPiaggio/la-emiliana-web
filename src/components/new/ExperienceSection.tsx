"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Leaf, Heart, Users } from "lucide-react";

// ============================================================================
// SUBCOMPONENTE DE VIDEO
// Lógica de reproducción por Hover, Reset por Viewport y Preload
// ============================================================================
function VideoFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    // Observer para resetear la reproducción cuando el componente SALE de la pantalla
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            hasPlayedRef.current = false; // Permite reproducirse nuevamente la próxima vez que entre
          }
        });
      },
      { threshold: 0.15 } // Se activa cuando menos del 15% del frame es visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handler para reproducir SOLO una vez por entrada
  const handleMouseEnter = () => {
    if (videoRef.current && !hasPlayedRef.current) {
      hasPlayedRef.current = true;
      videoRef.current.play().catch(() => {
        // Previene excepciones si el navegador bloquea autoplay
      });
    }
  };

  return (
    <div
      id="experiencia"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden shadow-md bg-stone-900 group cursor-pointer"
    >
      <video
        ref={videoRef}
        preload="none"
        poster="/poster-experiencia.jpg"
        muted
        playsInline
        className="w-full h-full object-cover rounded-2xl"
      >
        {/* <source src="/video-experiencia.webm" type="video/webm" /> */}
        <source src="/video_optimizado3.mp4" type="video/mp4" />

        {/* Fallback en caso de que el navegador no soporte la etiqueta <video> */}
        <Image
          src="/poster-experiencia.jpg"
          alt="Muelle al atardecer en La Emiliana"
          fill
          className="object-cover"
        />
      </video>

      {/* Sombreado sutil inferior para destacar la tipografía manuscrita */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Detalle del texto manuscrito */}
      <div className="absolute bottom-6 left-6 text-white drop-shadow-md pointer-events-none z-10">
        <p className="font-serif italic text-2xl sm:text-3xl font-light">
          Viví la experiencia
        </p>
        <div className="w-10 h-[2px] bg-white mt-1 rounded-full opacity-80" />
      </div>
    </div>
  );
}

// Dynamic Import (Lazy Loading) del Reproductor de Video
const ExperienceVideoLazy = dynamic(() => Promise.resolve(VideoFrame), {
  ssr: false,
  loading: () => (
    <div className="h-[380px] sm:h-[460px] w-full rounded-2xl bg-stone-300 animate-pulse" />
  ),
});

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
interface Feature {
  id: string;
  title: string;
  icon: React.ElementType;
}

const FEATURES: Feature[] = [
  { id: "aire", title: "Aire puro", icon: Leaf },
  { id: "bienestar", title: "Bienestar", icon: Heart },
  { id: "familia", title: "Momentos en familia y con amigos", icon: Users },
];

export function ExperienceSection() {
  return (
    <section className="w-full bg-[#f6f2e9] text-[#2c3e2e] py-16 md:py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* LADO IZQUIERDO: Frame de Video con Lazy Loading */}
        <div className="lg:col-span-6">
          <ExperienceVideoLazy />
        </div>

        {/* LADO DERECHO: Contenido Editorial y Pilares */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          
          {/* Tag de Categoría */}
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-500">
            LA EXPERIENCIA
          </span>

          {/* Encabezado en Playfair Display */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15] text-[#233325] font-normal">
            Desconectá para <br />
            volver a conectar
          </h2>

          {/* Cuerpo en Outfit */}
          <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed">
            En La Emiliana, cada rincón invita a bajar el ritmo, respirar
            profundo y disfrutar lo simple. Desde un atardecer en la laguna
            hasta una tarde de fútbol o vóley, la experiencia está pensada para
            que vivas momentos únicos, en contacto con la naturaleza.
          </p>

          {/* Pilares / Íconos inferiores */}
          <div className="pt-6 border-t border-stone-300/60 grid grid-cols-3 gap-4">
            {FEATURES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-start space-y-2 pr-2 ${
                    index !== FEATURES.length - 1
                      ? "border-r border-stone-300/60"
                      : ""
                  }`}
                >
                  <Icon className="w-6 h-6 text-[#2c3e2e] stroke-[1.5]" />
                  <span className="text-xs sm:text-sm font-medium text-stone-700 leading-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}