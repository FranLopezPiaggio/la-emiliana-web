// src/components/CabinGrid.tsx
import Image from "next/image";

interface Cabin {
  id: string;
  title: string;
  description: string;
  size: string;
  guests: string;
  priceUSD: number;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  footerLabel: string;
}

const CABINS_DATA: Cabin[] = [
  {
    id: "cabana-humedal",
    title: "Cabaña del Humedal",
    description:
      "Refugio íntimo suspendido sobre pilotes con jacuzzi exterior, deck solárium y vista despejada a las lagunas interiores.",
    size: "75 m²",
    guests: "2 Huéspedes",
    priceUSD: 280,
    imageSrc:
      "https://lh3.googleusercontent.com/aida/AEtjO1WWZemYw3j5gR41HtugZHQEh4i0yDbChtLjdKqmopvx-KC1MryICmulRdK1RCLw4PMzgODh7lGZz_YBGPMI_ONAMuZNiqOOz2TdDyODP9EN5bV_CvU-5dDjG5Ev3uNfMvKrDSRBSLSFRDYL-vB3QJDGjizsYJ8Ut2gsDSZ7XmzG5dbwmI7L9SvlvbhhOiSI3kFvVNGQ_risn0CLMPWv5851jNTmr9XMBN7WclD_wWvbxMV9cLhTH7XXX2g",
    imageAlt:
      "Cabaña de madera sobre el agua con deck privado y vista al pantano en Esteros del Iberá",
    tags: ["King Bed", "Desayuno Silvestre", "Vista Panorámica"],
    footerLabel: "Check-in 15:00",
  },
  {
    id: "suite-laguna-dorada",
    title: "Suite Laguna Dorada",
    description:
      "Amplitud distinguida con piscina plunge privada sin límites, chimenea nórdica de hierro fundido y sala de lectura integrada.",
    size: "110 m²",
    guests: "2-4 Huéspedes",
    priceUSD: 390,
    imageSrc:
      "https://lh3.googleusercontent.com/aida/AEtjO1W21o5APYuL2H2APYjdlvpBF2tQ_FVVvJohUXH5bCjjh4nbAHozxsCl92ybIUm6hx0a_-FtjkcfgJYUGNkDTwYlyXa-60lfZT1q_MOJtaH9Stmf9erp8R_xDEszeybnXLdqaqLsyWz6lqYQuGvNkLp8CcKZKaD8nKnCFH6o5wU6qnOvwYRpWxUNxa87EPT7bZWjXIHN35FIpVc9-82PoevhSdnZicqWbxVv9kd8zAs-TVD_JH10FBVAKqQ",
    imageAlt:
      "Suite de madera y piedra con chimenea nórdica e interior cálido con vista a palmeras correntinas",
    tags: ["Master Suite", "Fogonero Propio", "Servicio de Guía"],
    footerLabel: "Guía Privado",
  },
  {
    id: "refugio-selva",
    title: "Refugio de la Selva",
    description:
      "Diseñada para familias o grupos que buscan inmersión absoluta. Dos suites independientes, cocina rústica y terraza mirador astronómico.",
    size: "145 m²",
    guests: "4-6 Huéspedes",
    priceUSD: 480,
    imageSrc:
      "https://lh3.googleusercontent.com/aida/AEtjO1UqbpiNNzTCPfCg40-8M1rcxMSZBw07fENtokEqiVno_WFeBtS_XMAdpaRNCtr1zQWL0LeMEc9l8jWI1Hwla5ENZRoZlEgkhkF5t22VXF5SR1cJ0XinwHprLedgH_apGbg-BY4sA61U4qJey2-t786mh52GgY-vP7Ji028IsD7HSzxrTRVCO33fFApIbzp33Mklsp7ftJnGf32TzVFdG6rbPh3le0-MHPEbKgV_FfLthciWQs4PIRapoefC",
    imageAlt:
      "Deck de madera con canoa rústica y acceso directo al estero argentino",
    tags: ["Familiar", "Parrilla Criolla", "Muelle Exclusivo"],
    footerLabel: "Hasta 6 Huéspedes",
  },
];

export default function CabinGrid() {
  return (
    <section className="w-full py-24 bg-moss relative overflow-hidden" id="cabanas">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-gold-line"></span>
              <span className="font-deco text-xs uppercase tracking-[0.25em] text-gold-line">
                Descanso
              </span>
            </div>
            <h2 className="font-deco text-3xl sm:text-4xl lg:text-5xl text-sand-light tracking-wider uppercase leading-tight">
              NUESTRAS CABAÑAS
            </h2>
            <p className="font-sans text-sand text-sm sm:text-base mt-3 font-light">
              Espacios concebidos para el reposo consciente, equipados con materiales
              nobles, textiles naturales y total privacidad frente al agua.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-moss-300/80 border border-gold-line/25 text-sand text-xs font-sans tracking-widest uppercase self-start md:self-auto">
            <span>Temporada 2025/2026</span>
          </div>
        </div>

        {/* Cabin Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CABINS_DATA.map((cabin) => (
            <article
              key={cabin.id}
              className="flex flex-col bg-moss-300/80 rounded-2xl overflow-hidden border border-gold-line/25 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Media Container */}
              <div className="relative w-full h-64 overflow-hidden p-2">
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-moss-400">
                  <Image
                    src={cabin.imageSrc}
                    alt={cabin.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover feathered-image transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_15px_rgba(43,48,35,0.7)] pointer-events-none"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-moss-300/85 backdrop-blur-sm text-sand-light text-[11px] font-sans font-medium border border-gold-line/20 z-10">
                    {cabin.size} · {cabin.guests}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3.5 py-1 rounded-full bg-moss/90 backdrop-blur text-sand-light font-deco text-sm font-semibold border border-gold-line/30 z-10">
                    ${cabin.priceUSD} USD{" "}
                    <span className="font-sans font-normal text-[10px] text-sand/70">
                      / noche
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-deco text-xl text-sand-light mb-2 uppercase tracking-wider">
                    {cabin.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-sand/80 mb-5 font-light leading-relaxed">
                    {cabin.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cabin.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-moss-200/80 border border-gold-line/15 text-sand text-[11px] font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-gold-line/15 flex items-center justify-between">
                  <span className="text-[11px] font-sans text-sand/70 uppercase tracking-wider">
                    {cabin.footerLabel}
                  </span>
                  <button
                    type="button"
                    className="px-6 py-2 rounded-full bg-terracotta text-sand-light font-sans text-xs uppercase tracking-wider hover:bg-terracotta-hover transition-all duration-300 border border-gold-line/30 cursor-pointer"
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}