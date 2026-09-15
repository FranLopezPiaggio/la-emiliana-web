"use client";

import { useState } from "react";

export default function ConciergeCTA() {
  const [fullName, setFullName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(
    "Noviembre 2025 (Temporada de Aves)"
  );

  const buildWhatsappUrl = () => {
    const baseUrl = "https://wa.me/5493794000000";
    const nameText = fullName.trim() ? `Mi nombre es ${fullName.trim()}. ` : "";
    const message = `Hola Iberá Lodge! ${nameText}Quisiera consultar disponibilidad de cabañas para ${selectedMonth}.`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      className="w-full py-24 bg-moss-400 text-sand relative overflow-hidden"
      id="concierge"
    >
      {/* Subtle atmospheric gold & terracotta glow */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-gold-line/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-terracotta/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Details */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-moss-300 border border-gold-line/25 text-sand-light text-xs font-sans tracking-wider w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-line"></span>
              <span>Atención Personalizada 24/7</span>
            </div>

            <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl text-sand-light tracking-wide leading-tight mb-6 uppercase">
              Tu pausa consciente comienza en{" "}
              <span className="italic font-normal font-serif lowercase text-gold-line">
                Corrientes
              </span>
            </h2>

            <p className="font-sans text-sand text-base sm:text-lg mb-8 max-w-xl font-light leading-relaxed">
              Cupos limitados por temporada para preservar el equilibrio biológico
              del humedal. Diseñamos traslados fluviales privados, dietas
              personalizadas y safaris a medida.
            </p>

            <div className="space-y-4 font-sans text-sm text-sand/90 font-light">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold-line text-[20px]">
                  pin_drop
                </span>
                <span>
                  La Emiliana / Garruchos,
                  Corrientes
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold-line text-[20px]">
                  schedule
                </span>
                <span>
                  Recepción de vuelos en Posadas (PSS) y Corrientes Capital (CNQ)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-gold-line text-[20px]">
                  mail
                </span>
                <a
                  href="mailto:contacto@laemilianagarruchos.com.ar"
                  className="hover:text-gold-line transition-colors"
                >
                  contacto@laemilianagarruchos.com.ar
                </a>
              </div>
            </div>
          </div>

          {/* Right WhatsApp Concierge Reservation Card */}
          <div className="lg:col-span-5">
            <div className="bg-moss-300/90 text-sand-light p-8 rounded-2xl shadow-2xl border border-gold-line/30 backdrop-blur-md flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-moss-200 border border-gold-line/30 flex items-center justify-center text-terracotta shrink-0">
                  <span className="material-symbols-outlined text-[26px]">
                    support_agent
                  </span>
                </div>
                <div>
                  <h3 className="font-deco text-xl text-sand-light tracking-wider uppercase">
                    Concierge Directo
                  </h3>
                  <p className="text-[11px] uppercase tracking-widest text-gold-line font-sans">
                    Respuesta en menos de 15 minutos
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-sand/80 mb-6 font-sans font-light leading-relaxed">
                Indícanos tus fechas estimadas y cantidad de viajeros para armar
                un itinerario exclusivo con todo incluido.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 mb-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-[11px] uppercase tracking-wider text-sand/70 block mb-1.5 font-sans"
                  >
                    Nombre Completo
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej: Valentina Morales"
                    className="w-full px-4 py-3 rounded-xl bg-moss-200/90 border border-gold-line/20 text-sand-light text-sm font-sans focus:outline-none focus:border-gold-line placeholder-sand/40 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="visitMonth"
                    className="text-[11px] uppercase tracking-wider text-sand/70 block mb-1.5 font-sans"
                  >
                    Mes Deseado de Visita
                  </label>
                  <select
                    id="visitMonth"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-moss-200/90 border border-gold-line/20 text-sand-light text-sm font-sans focus:outline-none focus:border-gold-line cursor-pointer transition-colors"
                  >
                    <option value="Noviembre 2025 (Temporada de Aves)" className="bg-moss-300">
                      Noviembre 2025 (Temporada de Aves)
                    </option>
                    <option value="Diciembre 2025 (Atardeceres Cálidos)" className="bg-moss-300">
                      Diciembre 2025 (Atardeceres Cálidos)
                    </option>
                    <option value="Enero - Febrero 2026 (Verano Iberá)" className="bg-moss-300">
                      Enero - Febrero 2026 (Verano Iberá)
                    </option>
                    <option value="Marzo - Abril 2026 (Otoño Calmo)" className="bg-moss-300">
                      Marzo - Abril 2026 (Otoño Calmo)
                    </option>
                  </select>
                </div>
              </form>

              <a
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-terracotta text-sand-light font-sans text-xs uppercase tracking-[0.16em] font-semibold hover:bg-terracotta-hover transition-all duration-300 shadow-lg border border-gold-line/30 text-center cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Conversar por WhatsApp con el Concierge</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 mt-4 text-sand/60 text-xs font-sans">
                <span className="material-symbols-outlined text-[13px]">lock</span>
                <span>Sin cargos por consulta previa de tarifas</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}