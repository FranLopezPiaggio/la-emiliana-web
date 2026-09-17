import React from "react";
import {
  Waves,
  Wifi,
  Flame,
  CircleDot,
  Trees,
  Car,
  ShieldCheck,
  Coffee,
  Sparkles,
} from "lucide-react";

interface Amenity {
  icon: React.ComponentType<{ className?: string }>;
  id?: string;
  title: string;
  description: string;
}

const AMENITIES: Amenity[] = [
  {
    icon: Waves,
    title: "Piscina al aire libre",
    description: "Zona de relax con solárium y reposeras.",
  },
  {
    icon: Flame,
    title: "Quincho y parrilla en cada cabaña",
    description: "Espacios quincho equipados para asados.",
  },
  {
    icon: Wifi,
    title: "Conectividad Wi-Fi",
    description: "Internet de alta velocidad en todo el predio.",
  },
  {
    icon:  CircleDot,
    title: "Deportes",
    description:"Cancha de fútbol y voley",
  },
  {
    icon: Trees,
    title: "Parque, Pinares y Lagunas",
    description:"33 ha. de Pinares, Lagunas Naturales para realizar cabalgatas, caminatas entre la naturaleza",
  },
];

export function AmenitiesBanner() {
  return (
    <section id="amenities" className="w-full bg-[#233325] text-[#f6f2e9] py-16 md:py-20 px-6 lg:px-16 border-y border-[#2c3e2e]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-400">
              SERVICIOS & COMODIDADES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#f6f2e9] font-normal">
              Todo pensado para tu tranquilidad
            </h2>
          </div>
          <p className="text-sm text-stone-300 font-light max-w-md leading-relaxed">
            Disfrutá de instalaciones preparadas para brindarte la mejor experiencia durante tu estadía.
          </p>
        </div>

                {/* Grid Principal: Items + Separador + Texto destacado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* Lista de Amenities / Características (6 Columnas) */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-0">
            {AMENITIES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center text-center px-2 sm:px-3 relative ${
                    // Línea divisora sutil a la derecha de cada item (excepto el último en desktop)
                    index !== AMENITIES.length - 1
                      ? "md:border-r md:border-stone-400/40"
                      : ""
                  }`}
                >
                  {/* Icono */}
                  <div className="mb-3 text-[#2c3e2e] flex items-center justify-center">
                    <Icon className="w-8 h-8 stroke-[1.4]" />
                  </div>

                  {/* Título del Amenity */}
                  <h4 className="text-sm font-medium font-sans text-stone-800 leading-snug">
                    {item.title}
                  </h4>

                  {/* Descripción opcional */}
                  {item.description && (
                    <p className="text-xs text-stone-600 font-light mt-0.5 leading-tight">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );

  
}