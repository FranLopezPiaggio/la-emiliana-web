// src/components/Footer.tsx
import Link from "next/link";
import { getWhatsappUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-green border-t border-gold-line/15 text-sand py-16">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        
        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="font-deco text-2xl text-sand-light tracking-widest uppercase">
                La Emiliana, Garruchos
              </span>
            </div>
            <p className="text-sm font-sans text-sand/80 max-w-sm font-light leading-relaxed">
              Refugio de quietud y hospitalidad regenerativa en Corrientes, Argentina.
            </p>
          </div>

          {/* Exploration Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-deco text-xs uppercase tracking-[0.2em] text-gold-line">
              Exploración
            </span>
            <Link
              className="text-sm text-sand/80 hover:text-sand-light transition-colors font-light"
              href="#cabanas"
            >
              Las Cabañas de Madera
            </Link>
            <Link
              className="text-sm text-sand/80 hover:text-sand-light transition-colors font-light"
              href="#experiencia"
            >
              Pinares y Lagunas
            </Link>
            {/* <Link
              className="text-sm text-sand/80 hover:text-sand-light transition-colors font-light"
              href="#origen"
            >
              Gastronomía Regional Correntina
            </Link> */}
            <Link
              className="text-sm text-sand/80 hover:text-sand-light transition-colors font-light"
              href="#complejo"
            >
              El Rio Uruguay
            </Link>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="font-deco text-xs uppercase tracking-[0.2em] text-gold-line">
              Ubicación &amp; Contacto
            </span>
            <p className="text-sm text-sand/80 font-light">
              Garruchos, Corrientes, Argentina
            </p>
            <p className="text-sm text-sand/80 font-light">
              Coordenadas: 28°08&apos;01.8&quot;S 55°40&apos;20.2&quot;W
            </p>
            <Link
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sand-light hover:text-gold-line transition-colors mt-2"
              href={getWhatsappUrl("generic")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle/>
              <span>WhatsApp Directo</span>
            </Link>
          </div>

          {/* Social Presence */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-deco text-xs uppercase tracking-[0.2em] text-gold-line">
              Presencia
            </span>
            <a
              className="text-sm text-sand/80 hover:text-sand-light transition-colors font-light"
              href="https://instagram.com/la_emiliana22"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram @la_emiliana22
            </a>
            <Link
              className="text-sm text-sand/80 hover:text-sand-light transition-colors font-light"
              href="#"
            >
              Relatos de Expedición
            </Link>
            <Link
              className="text-sm text-sand/80 hover:text-sand-light transition-colors font-light"
              href="#"
            >
              Guía de Llegada
            </Link>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-gold-line/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sand/60 text-xs font-sans">
          <p>© {currentYear} La Emiliana, Garruchos, Corrientes. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link className="hover:text-sand-light transition-colors" href="#">
              Privacidad
            </Link>
            <Link className="hover:text-sand-light transition-colors" href="#">
              Compromiso Ambiental
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}