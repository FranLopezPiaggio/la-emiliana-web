// src/components/LocationMap.tsx
import Link from "next/link";

export default function LocationMap() {
  // Coordenadas o ubicación en texto para el mapa
  const locationQuery = encodeURIComponent(
    "La Emiliana,Garruchos, Corrientes, Argentina"
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${locationQuery}`;
  const embedUrl = `https://maps.google.com/maps?q=${locationQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="ubicacion" className="w-full py-20 bg-moss text-sand relative">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-moss-300 border border-gold-line/25 text-sand-light text-xs font-sans tracking-wider mb-4">
            <span className="material-symbols-outlined text-[16px] text-terracotta">
              location_on
            </span>
            <span>Ubicación Privilegiada</span>
          </div>
          <h2 className="font-deco text-3xl sm:text-4xl text-sand-light tracking-wide uppercase">
            Cómo Llegar
          </h2>
          <p className="font-sans text-sand/80 text-sm sm:text-base max-w-xl font-light mt-3">
            Nos encontramos en Garruchos, un entorno natural único en Corrientes.
          </p>
        </div>

        {/* Map Container Card */}
        <div className="relative rounded-2xl overflow-hidden bg-moss-300 border border-gold-line/30 shadow-2xl">
          
          {/* Google Maps Iframe */}
          <div className="w-full h-[400px] sm:h-[480px] lg:h-[520px] relative">
            <iframe
              title="Ubicación Iberá Eco-Lodge"
              src={embedUrl}
              className="w-full h-full border-0 grayscale-[30%] contrast-[105%] opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Floating Action Overlay / GPS Button */}
          <div className="p-6 bg-moss-300/95 border-t border-gold-line/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-sand/90 font-light">
              <span className="material-symbols-outlined text-gold-line text-[20px] shrink-0">
                navigation
              </span>
              <span>
                Desde bajada Ruta Prov 94, por Ruta Prov. 37 / Acceso Garruchos, 8 min/5 Kms de camino consolidado de ripio y tierra.
              </span>
            </div>

            <Link
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta text-sand-light font-sans text-xs uppercase tracking-[0.16em] font-semibold hover:bg-terracotta-hover transition-all duration-300 border border-gold-line/30 whitespace-nowrap shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              <span>Abrir en Google Maps</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}