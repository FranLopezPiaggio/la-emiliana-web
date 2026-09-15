// src/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-20 z-10">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-gold-line/30 bg-moss-300/80 text-sand text-xs uppercase font-sans tracking-[0.22em] mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
            <span>La Emiliana · Garruchos · Corrientes</span>
          </div>

          <h1 className="font-deco text-4xl sm:text-5xl lg:text-6xl text-sand-light tracking-wide leading-[1.15] mb-5 uppercase">
            La Emiliana{" "}
            <span className="italic font-normal text-gold-line font-serif lowercase">
              un lugar
            </span>{" "}
            para desconectar
          </h1>

          <p className="font-sans text-sand text-base sm:text-lg max-w-2xl leading-relaxed font-light">
            Una experiencia de hospitalidad regenerativa, arquitectura sostenible y
            silencio absoluto en el corazón virgen de los humedales correntinos.
          </p>
        </div>

        {/* Visual Frame */}
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden p-2">
          <div className="relative w-full h-[440px] sm:h-[560px] lg:h-[620px] rounded-2xl overflow-hidden bg-moss-300">
            
            {/* Next.js Optimized Image */}
            <Image
              src="/cabana2.jpg"
              alt="Cabaña de madera y ventanales sobre los Esteros del Iberá al atardecer en Corrientes"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-[50%_65%] feathered-hero transform scale-[1.02] transition-transform duration-1000 ease-out hover:scale-105"
            />

            {/* Overlays & Blends */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none shadow-[inset_0_0_80px_40px_rgba(53,59,43,0.92)]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-moss via-transparent to-transparent opacity-90 pointer-events-none"></div>

            {/* Organic Golden Line Loop */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                className="w-full h-full text-gold-line/60"
                fill="none"
                viewBox="0 0 1000 600"
              >
                <path
                  d="M 60 500 C 180 540, 360 480, 480 340 C 600 200, 800 160, 940 240"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            {/* Floating Top Badge
            <div className="absolute top-6 left-6 hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-moss-300/85 backdrop-blur-md text-sand-light text-xs font-sans tracking-wider border border-gold-line/25 shadow-lg">
              <span className="material-symbols-outlined text-[16px] text-terracotta">
                flare
              </span>
              <span>Golden Hour en Reserva Natural</span>
            </div> */}

            </div>
          </div>
        </div>

        {/* Booking / Availability Bar */}
        <div className="w-full max-w-5xl mx-auto mt-8 sm:mt-10 relative z-20" id="reservas">
          <form className="p-4 sm:p-5 rounded-2xl sm:rounded-full bg-moss-300/90 border border-gold-line/30 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
              
              {/* Check-in Input */}
              <div className="flex flex-col px-5 py-2.5 rounded-full bg-moss-200/90 border border-gold-line/20">
                <label className="text-[10px] uppercase text-gold-line tracking-wider mb-0.5 flex items-center gap-1.5 font-sans">
                  <span className="material-symbols-outlined text-[13px] text-terracotta">
                    calendar_today
                  </span>{" "}
                  Check-in
                </label>
                <input
                  className="bg-transparent text-sm text-sand-light font-medium focus:outline-none placeholder-sand/50"
                  type="text"
                  defaultValue="18 Nov, 2025"
                />
              </div>

              {/* Check-out Input */}
              <div className="flex flex-col px-5 py-2.5 rounded-full bg-moss-200/90 border border-gold-line/20">
                <label className="text-[10px] uppercase text-gold-line tracking-wider mb-0.5 flex items-center gap-1.5 font-sans">
                  <span className="material-symbols-outlined text-[13px] text-terracotta">
                    event
                  </span>{" "}
                  Check-out
                </label>
                <input
                  className="bg-transparent text-sm text-sand-light font-medium focus:outline-none placeholder-sand/50"
                  type="text"
                  defaultValue="23 Nov, 2025"
                />
              </div>

              {/* Guests Select */}
              <div className="flex flex-col px-5 py-2.5 rounded-full bg-moss-200/90 border border-gold-line/20">
                <label className="text-[10px] uppercase text-gold-line tracking-wider mb-0.5 flex items-center gap-1.5 font-sans">
                  <span className="material-symbols-outlined text-[13px] text-terracotta">
                    group
                  </span>{" "}
                  Huéspedes
                </label>
                <select className="bg-transparent text-sm text-sand-light font-medium focus:outline-none cursor-pointer">
                  <option className="bg-moss-300 text-sand-light">
                    2 Adultos · 1 Cabaña
                  </option>
                  <option className="bg-moss-300 text-sand-light">
                    4 Adultos · Suite Familiar
                  </option>
                  <option className="bg-moss-300 text-sand-light">
                    1 Huésped · Retiro Silencio
                  </option>
                </select>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-terracotta text-sand-light font-sans text-xs uppercase tracking-[0.18em] font-semibold hover:bg-terracotta-hover transition-all duration-300 shadow-lg border border-gold-line/30 transform hover:-translate-y-0.5 cursor-pointer"
              type="button"
            >
              <span>Ver Disponibilidad</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          </form>
        </div>

    </section>
  );
}