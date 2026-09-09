// src/components/StoryZigzag.tsx
import Image from "next/image";
import Link from "next/link";

export default function StoryZigzag() {
  return (
    <section
      className="relative w-full py-24 bg-moss-200/60 overflow-hidden"
      id="origen"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Intro Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block relative">
            <svg
              className="absolute -inset-x-12 -inset-y-6 w-[calc(100%+6rem)] h-[calc(100%+3rem)] pointer-events-none text-gold-line/40"
              fill="none"
              viewBox="0 0 400 120"
            >
              <path
                d="M 40 60 C 100 10, 300 10, 360 60 C 320 110, 80 110, 40 60 Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <span className="font-deco text-2xl sm:text-3xl text-sand-light tracking-[0.25em] uppercase block px-8 py-2">
              HISTORIA
            </span>
          </div>
          <p className="font-sans text-sand/80 text-sm mt-4 font-light tracking-wide">
            La armonia entre naturaleza y silencio
          </p>
        </div>

        {/* STEP 01: EL ORIGEN (Image Left, Narrative Right) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          
          {/* Left Feathered Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-3">
              <svg
                className="absolute -top-10 -left-10 w-full h-full pointer-events-none text-gold-line/60 z-20"
                fill="none"
                viewBox="0 0 500 450"
              >
                <path
                  d="M 60 20 C 220 -20, 460 30, 480 180 C 500 320, 380 440, 180 420 C 40 400, 10 260, 40 100"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>

              <div className="feathered-card bg-moss-300 relative">
                <div className="relative w-full h-[380px] sm:h-[460px]">
                  <Image
                    src="/entrada-cartel1.jpg"
                    alt="Muelle de madera privado sobre la laguna tranquila de Iberá con una pareja al atardecer en Corrientes"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[50%_80%] feathered-image transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 shadow-[inset_0_0_50px_25px_rgba(53,59,43,0.85)] pointer-events-none"></div>
                <div className="absolute bottom-5 left-5 px-4 py-1.5 rounded-full bg-moss-300/85 backdrop-blur-md text-sand-light text-xs font-sans flex items-center gap-2 border border-gold-line/30 shadow z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                  <span>Ubicada en un rincon de la provincia de Corrientes, cerca de la frontera con Misiones y el Rio Uruguay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-gold-line"></span>
              <span className="font-deco text-xs uppercase text-gold-line tracking-[0.25em]">
               El Comienzo
              </span>
            </div>
            <h3 className="font-deco text-3xl sm:text-4xl text-sand-light tracking-wide mb-6 uppercase leading-snug">
              El origen de una idea
            </h3>
            <p className="font-sans text-sand text-base sm:text-lg leading-relaxed mb-8 font-light">
              La Emiliana es un proyecto que no nació de la noche a la mañana; se viene gestando desde hace ya bastante tiempo. Nació de un deseo profundo y de una necesidad clara: transformar nuestro estilo de vida y dar el primer paso hacia algo verdaderamente nuestro. 
            </p>

            <Link
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-sand-light hover:text-gold-line transition-colors font-medium"
              href="#concierge"
            >
              <span>Conocer nuestra historia</span>
              <span className="material-symbols-outlined text-[16px] text-terracotta">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>

        {/* STEP 02: NUESTRAS CABAÑAS (Narrative Left, Image Right) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          
          {/* Left Narrative */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center lg:pr-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-gold-line"></span>
              <span className="font-deco text-xs uppercase text-gold-line tracking-[0.25em]">
                La búsqueda
              </span>
            </div>
            <h3 className="font-deco text-3xl sm:text-4xl text-sand-light tracking-wide mb-6 uppercase leading-snug">
              Dejar el caos atrás
            </h3>
            <p className="font-sans text-sand text-base sm:text-lg leading-relaxed mb-8 font-light">
              Estábamos buscando un lugar donde pudiéramos vivir tranquilos. Queríamos huir del ruido constante, del estrés y de la exaltación que genera la vida en la ciudad. Necesitábamos un espacio de paz hasta que encontramos este rincón y supimos, de inmediato, que nos habíamos propuesto hacer de él nuestro verdadero lugar en el mundo.
            </p>

            {/* <div className="space-y-3.5 mb-8 font-sans text-sm text-sand">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border border-gold-line/50 bg-moss-300 flex items-center justify-center text-gold-line text-xs">
                  ✓
                </span>
                <span>Vistas 360° panorámicas orientadas al sol poniente</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border border-gold-line/50 bg-moss-300 flex items-center justify-center text-gold-line text-xs">
                  ✓
                </span>
                <span>Deck privado con plunge pool y reposeras de madera noble</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border border-gold-line/50 bg-moss-300 flex items-center justify-center text-gold-line text-xs">
                  ✓
                </span>
                <span>Ropa de cama de puro algodón teñido con tintes botánicos</span>
              </div>
            </div>

            <div>
              <Link
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-terracotta text-sand-light font-sans text-xs uppercase tracking-[0.18em] font-medium hover:bg-terracotta-hover transition-all shadow-md border border-gold-line/30"
                href="#cabanas"
              >
                <span>Explorar Cabañas</span>
                <span className="material-symbols-outlined text-[18px]">bed</span>
              </Link>
            </div> */}
          </div>

          {/* Right Feathered Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative p-3">
              <svg
                className="absolute -top-8 -right-8 w-full h-full pointer-events-none text-gold-line/60 z-20"
                fill="none"
                viewBox="0 0 500 450"
              >
                <path
                  d="M 440 30 C 280 -20, 40 60, 20 220 C 0 360, 140 440, 340 410 C 460 390, 490 280, 440 100"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>

              <div className="feathered-card bg-moss-300 relative">
                <div className="relative w-full h-[380px] sm:h-[460px]">
                  <Image
                    src="/palmeras-flores.jpg"
                    alt="Interior de cabaña de lujo con amplio ventanal panorámico, cama vestida en lino y chimenea con vistas al estero"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover objet-[50%_150%] feathered-image transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 shadow-[inset_0_0_50px_25px_rgba(53,59,43,0.85)] pointer-events-none"></div>
                <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-moss-300/85 backdrop-blur-md text-sand-light text-xs font-sans flex items-center gap-2 border border-gold-line/30 shadow z-10">
                  <span className="material-symbols-outlined text-[16px] text-terracotta">
                    visibility
                  </span>
                  <span>Rodeado de naturaleza</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 03: LA EXPERIENCIA CORRENTINA (Image Left, Narrative Right) */}
        <div
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          id="experiencias"
        >
          {/* Left Feathered Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-3">
              <svg
                className="absolute -bottom-8 -left-8 w-full h-full pointer-events-none text-gold-line/60 z-20"
                fill="none"
                viewBox="0 0 500 450"
              >
                <path
                  d="M 50 380 C 200 440, 450 390, 470 240 C 490 100, 360 20, 180 30 C 30 50, 0 180, 40 320"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>

              <div className="feathered-card bg-moss-300 relative">
                <div className="relative w-full h-[380px] sm:h-[460px]">
                  <Image
                    src="/cabana-flores.jpg"
                    alt="Mesa rústica servida al aire libre bajo guirnaldas de luces con gastronomía de autor y horno de leña al anochecer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[50%_50%]feathered-image transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 shadow-[inset_0_0_50px_25px_rgba(53,59,43,0.85)] pointer-events-none"></div>
                <div className="absolute bottom-5 left-5 px-4 py-1.5 rounded-full bg-terracotta text-sand-light text-xs font-sans flex items-center gap-1.5 shadow border border-gold-line/30 z-10">
                  <span className="material-symbols-outlined text-[14px]">
                    local_fire_department
                  </span>
                  <span>Cabañas de 4/8 personas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-gold-line"></span>
              <span className="font-deco text-xs uppercase text-gold-line tracking-[0.25em]">
                Construimos nuestro lugar
              </span>
            </div>
            <h3 className="font-deco text-3xl sm:text-4xl text-sand-light tracking-wide mb-6 uppercase leading-snug">
              Levantado a pulmón
            </h3>
            <p className="font-sans text-sand text-base sm:text-lg leading-relaxed mb-8 font-light">
              Sin contar con grandes recursos económicos, pero con todo nuestro empeño y dedicación, emprendimos el camino de la construcción. A fuerza de trabajo y esfuerzo a, logramos dar forma a lo que hoy estamos viendo: un complejo de cabañas para 4 personas cada una.
            </p>

            {/* <div className="grid grid-cols-3 gap-3 mb-8 text-center">
              <div className="p-3.5 rounded-xl bg-moss-300/70 border border-gold-line/20">
                <span className="material-symbols-outlined text-terracotta text-[24px]">
                  kayaking
                </span>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-sand-light mt-1">
                  Safaris Silenciosos
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-moss-300/70 border border-gold-line/20">
                <span className="material-symbols-outlined text-terracotta text-[24px]">
                  soup_kitchen
                </span>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-sand-light mt-1">
                  Sabor Litoral
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-moss-300/70 border border-gold-line/20">
                <span className="material-symbols-outlined text-gold-line text-[24px]">
                  nightlight
                </span>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-sand-light mt-1">
                  Cielos Oscuros
                </p>
              </div>
            </div> */}

            <Link
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-sand-light hover:text-gold-line transition-colors font-medium"
              href="#experiencias"
            >
              <span>Ver calendario de experiencias</span>
              <span className="material-symbols-outlined text-[16px] text-terracotta">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>

        {/* STEP 04: LA EXPERIENCIA CORRENTINA (Image Left, Narrative Right) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 mt-30 gap-12 lg:gap-16 items-center mb-28">
          
          {/* Left Narrative */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center lg:pr-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-gold-line"></span>
              <span className="font-deco text-xs uppercase text-gold-line tracking-[0.25em]">
                Compartir
              </span>
            </div>
            <h3 className="font-deco text-3xl sm:text-4xl text-sand-light tracking-wide mb-6 uppercase leading-snug">
              Abrir las puertas
            </h3>
            <p className="font-sans text-sand text-base sm:text-lg leading-relaxed mb-8 font-light">
              A medida que este lugar tomaba forma, se nos ocurrió una idea fundamental: no podíamos guardarlo solo para nosotros. Sentimos el deseo de compartirlo con personas que, al igual que nosotros, estén buscando un contacto auténtico con la naturaleza y la oportunidad de desconectarse de la rutina.
            </p>

            {/* <div className="space-y-3.5 mb-8 font-sans text-sm text-sand">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border border-gold-line/50 bg-moss-300 flex items-center justify-center text-gold-line text-xs">
                  ✓
                </span>
                <span>Vistas 360° panorámicas orientadas al sol poniente</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border border-gold-line/50 bg-moss-300 flex items-center justify-center text-gold-line text-xs">
                  ✓
                </span>
                <span>Deck privado con plunge pool y reposeras de madera noble</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border border-gold-line/50 bg-moss-300 flex items-center justify-center text-gold-line text-xs">
                  ✓
                </span>
                <span>Ropa de cama de puro algodón teñido con tintes botánicos</span>
              </div>
            </div> */}

            <div>
              <Link
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-terracotta text-sand-light font-sans text-xs uppercase tracking-[0.18em] font-medium hover:bg-terracotta-hover transition-all shadow-md border border-gold-line/30"
                href="#cabanas"
              >
                <span>Explorar Cabañas</span>
                <span className="material-symbols-outlined text-[18px]">bed</span>
              </Link>
            </div>
          </div>

          {/* Right Feathered Image */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative p-3">
              <svg
                className="absolute -top-8 -right-8 w-full h-full pointer-events-none text-gold-line/60 z-20"
                fill="none"
                viewBox="0 0 500 450"
              >
                <path
                  d="M 440 30 C 280 -20, 40 60, 20 220 C 0 360, 140 440, 340 410 C 460 390, 490 280, 440 100"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>

              <div className="feathered-card bg-moss-300 relative">
                <div className="relative w-full h-[380px] sm:h-[460px]">
                  <Image
                    src="/pinar-entrada.JPG"
                    alt="Interior de cabaña de lujo con amplio ventanal panorámico, cama vestida en lino y chimenea con vistas al estero"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[50%_30%]feathered-image transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 shadow-[inset_0_0_50px_25px_rgba(53,59,43,0.85)] pointer-events-none"></div>
                <div className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-moss-300/85 backdrop-blur-md text-sand-light text-xs font-sans flex items-center gap-2 border border-gold-line/30 shadow z-10">
                  <span className="material-symbols-outlined text-[16px] text-terracotta">
                    visibility
                  </span>
                  <span>Un lugar para desconectar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 05: LA EXPERIENCIA CORRENTINA (Image Left, Narrative Right) */}
        <div
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          id="experiencias"
        >
          {/* Left Feathered Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-3">
              <svg
                className="absolute -bottom-8 -left-8 w-full h-full pointer-events-none text-gold-line/60 z-20"
                fill="none"
                viewBox="0 0 500 450"
              >
                <path
                  d="M 50 380 C 200 440, 450 390, 470 240 C 490 100, 360 20, 180 30 C 30 50, 0 180, 40 320"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>

              <div className="feathered-card bg-moss-300 relative">
                <div className="relative w-full h-[380px] sm:h-[460px]">
                  <Image
                    src="/cabana4.jpg"
                    alt="Mesa rústica servida al aire libre bajo guirnaldas de luces con gastronomía de autor y horno de leña al anochecer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-[50%_60%]feathered-image transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 shadow-[inset_0_0_50px_25px_rgba(53,59,43,0.85)] pointer-events-none"></div>
                <div className="absolute bottom-5 left-5 px-4 py-1.5 rounded-full bg-terracotta text-sand-light text-xs font-sans flex items-center gap-1.5 shadow border border-gold-line/30 z-10">
                  <span className="material-symbols-outlined text-[14px]">
                    local_fire_department
                  </span>
                  <span>Cabañas de 4/8 personas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-gold-line"></span>
              <span className="font-deco text-xs uppercase text-gold-line tracking-[0.25em]">
                Invitar
              </span>
            </div>
            <h3 className="font-deco text-3xl sm:text-4xl text-sand-light tracking-wide mb-6 uppercase leading-snug">
              Tu lugar de descanso
            </h3>
            <p className="font-sans text-sand text-base sm:text-lg leading-relaxed mb-8 font-light">
              Queremos que este refugio construido con tanto esfuerzo sea también un espacio para vos. Te invitamos a conocer La Emiliana, disfrutar del entorno natural y ser parte de esta historia que recién empieza.
            </p>

            <Link
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-sand-light hover:text-gold-line transition-colors font-medium"
              href="#experiencias"
            >
              <span>Ver cabañas</span>
              <span className="material-symbols-outlined text-[16px] text-terracotta">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
        

      </div>
    </section>
  );
}