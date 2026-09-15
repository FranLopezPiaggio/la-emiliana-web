import React from "react";
import { Home, Waves, Trees, CircleDot, SunMedium } from "lucide-react";

interface Amenity {
  id: string;
  title: string;
  description?: string;
  icon: React.ElementType;
}

const AMENITIES: Amenity[] = [
  {
    id: "cabanas",
    title: "Cabañas",
    description: "completamente equipadas",
    icon: Home,
  },
  {
    id: "pileta",
    title: "Pileta",
    description: "para disfrutar todo el año",
    icon: Waves,
  },
  {
    id: "parque",
    title: "Amplio parque",
    description: "y espacios verdes",
    icon: Trees,
  },
  {
    id: "futbol",
    title: "Cancha de fútbol",
    icon: CircleDot,
  },
  {
    id: "voley",
    title: "Cancha de vóley",
    icon: SunMedium,
  },
  {
    id: "lagunas",
    title: "Lagunas",
    description: "y arroyo",
    icon: SunMedium,
  },
];

export function AmenitiesBanner() {
  return (
    <section className="w-full bg-[#e3e2d5] text-[#2c3e2e] min-h-[300px] lg:aspect-[6/1] py-10 px-6 md:px-12 flex flex-col justify-center overflow-hidden border-y border-stone-300/50">
    <div className="max-w-7xl mx-auto w-full flex flex-col justify-center gap-4 lg:gap-6">        
        {/* Subtítulo superior */}
        <span className="text-[12px] font-semibold tracking-[0.25em] uppercase text-stone-600 block">
          EL COMPLEJO CUENTA CON
        </span>

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

          {/* Divisor vertical entre la grilla y la frase del lado derecho (solo desktop) */}
          <div className="hidden lg:block lg:col-span-1 flex justify-center">
            <div className="h-24 w-[1px] bg-stone-400/50 mx-auto" />
          </div>

          {/* Frase destacada manuscrita / Serif en el lateral derecho */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="font-serif italic text-xl md:text-2xl leading-tight text-[#2c3e2e]">
              Naturaleza, deporte y descanso en un solo lugar
            </p>
            {/* Pequeña subrayado decorativo */}
            <div className="w-12 h-[2px] bg-[#2c3e2e] mt-2 rounded-full opacity-75" />
          </div>

        </div>

      </div>
    </section>
  );
}