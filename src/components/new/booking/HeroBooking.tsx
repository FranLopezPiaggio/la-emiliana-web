"use client";

import React, { useState } from "react";
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar, Users, Moon, MessageCircle } from "lucide-react";

export function BookingHeroSection() {
  const [checkIn, setCheckIn] = useState("");
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(2);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mensaje preformateado para WhatsApp
    const message = `Hola! Quisiera consultar disponibilidad en La Emiliana.%0A%0A- Fecha de llegada: ${checkIn || "A definir"}%0A- Personas: ${guests}%0A- Noches: ${nights}`;
    
    // Reemplaza con el número oficial de WhatsApp del complejo
    const whatsappUrl = `https://wa.me/5491112345678?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 lg:px-16 overflow-hidden bg-[#233325]">
      
      {/* CAPA DE FONDO (Punteros e interacciones desactivados) */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* -------------------------------------------------------------------
            VALOR 1: ANCHO Y POSICIÓN DE LA IMAGEN
            - 'right-0': Pega la imagen al borde derecho.
            - 'w-full lg:w-[60%]': En pantallas grandes ocupa el 60% de la pantalla.
              (Subí este valor si querés que la imagen entre más a la izquierda, ej. 65% o 70%).
           ------------------------------------------------------------------- */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full">
          <Image
            src="/cabana4.jpg"
            alt="La Emiliana"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* -------------------------------------------------------------------
            VALOR 2 Y 3: EL COLOR BASE Y LA TRANSICIÓN (GRADIENTE)
            - Ocupa el 100% de la pantalla (inset-0).
            - El color de fondo base sale de <section className="bg-[#233325]">.
            - El gradiente maneja la mezcla en 3 puntos porcentuales del ancho total (90deg):
           ------------------------------------------------------------------- */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(
              90deg, 
              #233325 0%, 
              #233325 40%, 
              rgba(35, 51, 37, 0.8) 55%, 
              rgba(35, 51, 37, 0) 70%
            )`
          }}
        />
      </div>

      {/* Contenido principal del Hero */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto pt-8 pb-12 flex flex-col justify-end items-start">
        
        {/* Encabezado Editorial y Texto Manuscrito */}
        <div className="max-w-2xl space-y-6">
          
          {/* Badge de ubicación */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white border border-white/10 text-xs tracking-widest uppercase font-semibold">
            <MapPin className="w-3.5 h-3.5 text-stone-200" />
            <span>Garruchos, Corrientes</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#f6f2e9] tracking-tight font-normal leading-[1.05] uppercase">
            Reservá tu estadía
          </h1>

          {/* Subtítulo Descriptivo */}
          <p className="text-lg md:text-xl text-stone-200 font-light leading-relaxed">
            Asegurá tu lugar en La Emiliana y disfrutá de la tranquilidad, la naturaleza y momentos inolvidables en nuestras cabañas.
          </p>

          {/* Texto Manuscrito / Itálico Alineado Abajo */}
          <div className="pt-2">
            <p className="font-serif italic text-2xl sm:text-3xl text-amber-100/90 font-light leading-snug drop-shadow-md">
              Desconectá del ritmo, conectá con el entorno
            </p>
          </div>

        </div>

      </div>

      {/* Bar / Formulario Flotante de Reserva */}
      <div className="relative z-20 max-w-7xl w-full mx-auto">
        <div className="bg-white/90 backdrop-blur-xl border border-white/40 p-4 sm:p-6 rounded-3xl shadow-2xl">
          <form
            onSubmit={handleBookingSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center"
          >
            
            {/* Campo 1: Fecha de Check-in */}
            <div className="lg:col-span-3 bg-white/80 border border-stone-200 rounded-2xl p-3 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#2c3e2e] transition-all">
              <Calendar className="w-5 h-5 text-[#2c3e2e] shrink-0" />
              <div className="flex flex-col w-full">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                  Llegada (Check-in)
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-sm text-stone-800 font-medium focus:outline-none cursor-pointer w-full"
                />
              </div>
            </div>

            {/* Campo 2: Cantidad de Noches */}
            <div className="lg:col-span-3 bg-white/80 border border-stone-200 rounded-2xl p-3 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#2c3e2e] transition-all">
              <Moon className="w-5 h-5 text-[#2c3e2e] shrink-0" />
              <div className="flex flex-col w-full">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                  Noches
                </label>
                <select
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  className="bg-transparent text-sm text-stone-800 font-medium focus:outline-none cursor-pointer w-full"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 10, 14].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "noche" : "noches"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Campo 3: Cantidad de Personas (Max 6) */}
            <div className="lg:col-span-3 bg-white/80 border border-stone-200 rounded-2xl p-3 flex items-center gap-3 focus-within:ring-2 focus-within:ring-[#2c3e2e] transition-all">
              <Users className="w-5 h-5 text-[#2c3e2e] shrink-0" />
              <div className="flex flex-col w-full">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                  Huéspedes (Máx. 6)
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="bg-transparent text-sm text-stone-800 font-medium focus:outline-none cursor-pointer w-full"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "persona" : "personas"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botón CTA de Consulta / WhatsApp */}
            <div className="lg:col-span-3">
              <button
                type="submit"
                className="w-full h-full min-h-[52px] bg-[#233325] hover:bg-[#1b281d] text-white font-medium text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                <span>Consultar reserva</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}