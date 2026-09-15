// src/components/SustainabilityMetrics.tsx

interface MetricItem {
  id: string;
  value: string;
  title: string;
  description: string;
}

const SUSTAINABILITY_METRICS: MetricItem[] = [
  {
    id: "plastic-free",
    value: "0%",
    title: "Plásticos de un uso",
    description: "Embalajes compostables y agua microfiltrada en vidrio.",
  },
  {
    id: "water-treated",
    value: "100%",
    title: "Aguas tratadas",
    description: "Biorreactores vegetales que recirculan el ciclo hidrológico.",
  },
  {
    id: "bird-species",
    value: "350+",
    title: "Especies de aves",
    description: "Refugio ornitológico registrado de preservación internacional.",
  },
  {
    id: "local-employment",
    value: "100%",
    title: "Empleo local",
    description: "Guías, cocineros y artesanos oriundos de Carlos Pellegrini.",
  },
];

export default function SustainabilityMetrics() {
  return (
    <section
      className="w-full py-20 bg-moss-300 border-y border-gold-line/15 relative"
      id="sustentabilidad"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SUSTAINABILITY_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="flex flex-col items-center text-center p-4"
            >
              <span className="font-deco text-4xl sm:text-5xl text-sand-light mb-2">
                {metric.value}
              </span>
              <h3 className="text-sm font-deco uppercase text-gold-line tracking-wider mb-2">
                {metric.title}
              </h3>
              <p className="text-xs text-sand/80 font-sans font-light">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}