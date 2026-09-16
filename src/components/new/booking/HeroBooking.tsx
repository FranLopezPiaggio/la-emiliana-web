"use client";

import React, { useState } from "react";
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
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 lg:px-16 overflow-hidden">
      {/* Imagen de fondo con gradiente direccional */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg-booking.jpg')`, // Asegúrate de colocar esta imagen en /public
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
      </div>

      {/* Contenido principal del Hero */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto pt-8 pb-12 grid grid-cols-1 lg:grid-cols-12 items-end gap-10">
        
        {/* Encabezado Editorial (Izquierda) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white border border-white/10 text-xs tracking-widest uppercase font-semibold">
            <MapPin className="w-3.5 h-3.5 text-stone-200" />
            <span>Garruchos, Corrientes</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#f6f2e9] tracking-tight font-normal leading-[1.05] uppercase">
            Reservá tu estadía
          </h1>

          <p className="text-lg md:text-xl text-stone-200 font-light max-w-xl leading-relaxed">
            Asegurá tu lugar en La Emiliana y disfrutá de la tranquilidad, la naturaleza y momentos inolvidables en nuestras cabañas.
          </p>
        </div>

        {/* Texto manuscrito lateral (Derecha) */}
        <div className="lg:col-span-5 flex lg:justify-end items-end">
          <div className="text-white drop-shadow-md text-left lg:text-right max-w-xs flex flex-col items-start lg:items-end gap-2">
            <p className="font-serif italic text-2xl sm:text-3xl text-stone-100 font-light leading-snug">
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