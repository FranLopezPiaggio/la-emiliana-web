export type WhatsappOrigin =
  | "hero"
  | "complex"
  | "amenities"
  | "experience"
  | "contact"
  | "booking"
  | "footer"
  | "location"
  | "generic";

export type MessageParams = {
  name?: string;
  date?: Date;
  persons?: string;
  nigth?: number;
  interest?: "invertir" | "conocer" | "ambas";
  cabin?: string;
};

// ponytail: plain switch templates, no i18n engine — add i18n lib when multi-language needed
export function getWhatsappMessage(
  origin: WhatsappOrigin,
  p: MessageParams = {}
): string {
  const name = p.name?.trim() ? `Soy ${p.name.trim()}. ` : "";

  switch (origin) {
    case "booking":
      return `Hola La Emiliana! ${name}Quisiera consultar disponibilidad para ${p.date ?? "próximas fechas"}.`;
    case "contact":
      return `Hola La Emiliana! ${name}Me interesa ${p.interest ?? "conocer el proyecto"}. Quisiera más información.`;
    case "complex":
      return `Hola La Emiliana! ${name}Me interesa ${p.cabin ?? "el complejo"} — quisiera más info.`;
    case "hero":
      return `Hola La Emiliana! ${name}Quisiera conocer el complejo.`;
    case "experience":
      return `Hola La Emiliana! ${name}Vi la experiencia y quiero saber más.`;
    case "amenities":
      return `Hola La Emiliana! ${name}Quisiera info sobre amenities y servicios.`;
    case "location":
      return `Hola La Emiliana! ${name}Quisiera info para llegar a Garruchos.`;
    case "footer":
    case "generic":
    default:
      return `Hola La Emiliana! ${name}Quisiera más información sobre el proyecto.`;
  }
}
