import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-20 pb-8 px-6 lg:px-16 overflow-hidden">
      {/* Background Image with Overlay Gradient — ponytail: absolute inset-0 = top:0 behind fixed navbar; pt-20 offsets content so text isn't hidden */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Cambia este path por la imagen de fondo que vayas a usar
          backgroundImage: `url('/hero-bg-1.jpeg')`,
        }}
      >
        {/* Soft lighting overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-transparent" />     
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        
        {/* Left Text Content */}
        <div className="lg:col-span-7 space-y-6 pt-8 lg:pt-0">
          
          {/* Subtitle / Category Header */}
          <span className="text-xs uppercase tracking-[0.25em] text-sand-700 font-semibold block">
            Un lugar para desconectar
          </span>

          {/* Hero Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-sand tracking-tight font-normal leading-[1.05] uppercase">
            La Emiliana
          </h1>

          {/* Hero Subtitle Description */}
          <p className="text-lg md:text-xl text-white-800 font-light max-w-lg leading-relaxed">
            Naturaleza, descanso y experiencias que se convierten en oportunidades.
          </p>
        </div>

        {/* Right Side Callout / Script Overlay Text */}
        <div className="lg:col-span-5 flex lg:justify-end items-end h-full">
          {/* Recreación del texto manuscrito "Tu próxima inversión en la naturaleza" */}
          <div className="text-white drop-shadow-md text-right max-w-xs flex flex-col items-end gap-4">
            <p className="font-serif italic text-2xl sm:text-3xl text-stone-100 font-light leading-snug">
              Tu próxima inversión comienza acá
            </p>
            <Link
              href="#complejo"
              className="inline-flex items-center gap-3 bg-[#2c3e2e] hover:bg-[#212f23] text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md group"
            >
              <span>Conocé el complejo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Floating Bar / Location Tag */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-6 border-t border-stone-800/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-800">
        <div className="flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full">
          <MapPin className="w-4 h-4 text-[#2c3e2e]" />
          <span className="font-medium">Ruta 94, Garruchos · Corrientes</span>
        </div>
      </div>
    </section>
  );
}