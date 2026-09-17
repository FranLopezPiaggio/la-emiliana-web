"use client";

import React from "react";
import Image from "next/image";
import { Users, Bed, Check, ArrowRight } from "lucide-react";

export interface Cabin {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  beds: string;
  description: string;
  image: string;
  features: string[];
}

const CABINS: Cabin[] = [
  {
    id: "cabana-bosque",
    name: "Cabaña del Bosque",
    subtitle: "Alojamiento Premium",
    capacity: "Hasta 6 personas",
    beds: "2 Dormitorios",
    description: "Espaciosa cabaña rodeada de vegetación nativa. Ideal para familias o grupos que buscan privacidad y máxima comodidad.",
    image: "/entrada-camino.jpg",
    features: ["Parrilla privada", "Aire Acondicionado", "Cocina equipada", "Deck con vista"],
  },
  {
    id: "cabana-laguna",
    name: "Cabaña de la Laguna",
    subtitle: "Alojamiento Confort",
    capacity: "Hasta 4 personas",
    beds: "1 Dormitorio principal + Diván",
    description: "Ubicada a pocos metros del espejo de agua. Calidez rústica con vistas panorámicas al atardecer.",
    image: "/entrada1.jpg",
    features: ["Vista al agua", "Aire Acondicionado", "Wi-Fi de alta velocidad", "Galería privada"],
  },
];

export function CabinsGrid() {

  const handleConsult = (cabinName: string) => {
    const message = `Hola! Quisiera consultar disponibilidad para la ${cabinName} en La Emiliana.`;
    window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="cabanas" className="w-full bg-[#f6f2e9] text-[#2c3e2e] py-16 md:py-24 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Encabezado Editorial */}
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-500">
            NUESTRAS CABAÑAS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15] text-[#233325] font-normal">
            Espacios diseñados para el descanso
          </h2>
          <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed">
            Cada opción combina calidez arquitectónica, equipamiento completo y una integración armónica con el entorno natural.
          </p>
        </div>

        {/* Grid de Cabañas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CABINS.map((cabin) => (
            <div
              key={cabin.id}
              className="group bg-white/70 backdrop-blur-sm border border-stone-300/70 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Imagen principal */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden">
                <Image
                  src={cabin.image}
                  alt={cabin.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badge de Capacidad */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#2c3e2e]">
                    <Users className="w-3.5 h-3.5" />
                    {cabin.capacity}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#2c3e2e]">
                    <Bed className="w-3.5 h-3.5" />
                    {cabin.beds}
                  </span>
                </div>
              </div>

              {/* Contenido descriptivo */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-stone-500">
                    {cabin.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif text-[#233325]">
                    {cabin.name}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    {cabin.description}
                  </p>
                </div>

                {/* Features Pill list */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-200">
                  {cabin.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#2c3e2e] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Botón de Acción */}
                <div className="pt-2">
                  <button
                    onClick={() => handleConsult(cabin.name)}
                    className="w-full flex items-center justify-center gap-2 bg-[#2c3e2e] hover:bg-[#212f23] text-white text-xs tracking-wider uppercase font-medium py-3.5 px-6 rounded-2xl transition-all shadow-sm hover:shadow-md cursor-pointer group/btn"
                  >
                    <span>Consultar Cabaña</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}