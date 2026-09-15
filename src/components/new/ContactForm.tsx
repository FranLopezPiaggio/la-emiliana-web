"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { getWhatsappUrl } from "@/lib/whatsapp";

type InterestOption = "invertir" | "conocer" | "ambas";

interface FormData {
  fullName: string;
  whatsapp: string;
  email: string;
  interest: InterestOption;
}

const INTEREST_OPTIONS: { id: InterestOption; label: string }[] = [
  { id: "invertir", label: "Invertir" },
  { id: "conocer", label: "Conocer el proyecto" },
  { id: "ambas", label: "Ambas" },
];

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    whatsapp: "",
    email: "",
    interest: "conocer",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ponytail: direct wa.me open, no backend — add Resend/Formspree when server persistence needed
    const url = getWhatsappUrl("contact", {
      name: formData.fullName,
      interest: formData.interest,
    });
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => setIsSubmitting(false), 500);
  };

  return (
    <section id="contacto" className="w-full bg-[#f6f2e9] text-[#2c3e2e] py-16 md:py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-stone-500">
            CONTACTO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15] text-[#233325] font-normal">
            Te interesa el proyecto?
          </h2>
          <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed">
            Completa tus datos y contactanos para saber mas sobre La Emiliana.
          </p>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/60 backdrop-blur-sm border border-stone-300/70 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Campo: Nombre y Apellido */}
            <div className="flex flex-col space-y-2 md:col-span-2">
              <label
                htmlFor="fullName"
                className="text-xs font-semibold tracking-wider uppercase text-stone-600"
              >
                Nombre y apellido
              </label>
              <input
                type="text"
                id="fullName"
                required
                placeholder="Ej. María González"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#2c3e2e] focus:ring-1 focus:ring-[#2c3e2e] transition-all"
              />
            </div>

            {/* Campo: WhatsApp */}
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="whatsapp"
                className="text-xs font-semibold tracking-wider uppercase text-stone-600"
              >
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                required
                placeholder="+54 9 11 1234-5678"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData({ ...formData, whatsapp: e.target.value })
                }
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#2c3e2e] focus:ring-1 focus:ring-[#2c3e2e] transition-all"
              />
            </div>

            {/* Campo: Email */}
            {/* <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-semibold tracking-wider uppercase text-stone-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="ejemplo@correo.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#2c3e2e] focus:ring-1 focus:ring-[#2c3e2e] transition-all"
              />
            </div> */}

          </div>

          {/* Campo: Toggle de Interés */}
          <div className="flex flex-col space-y-3 pt-2">
            <label className="text-xs font-semibold tracking-wider uppercase text-stone-600">
              ¿Qué te interesa de La Emiliana?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {INTEREST_OPTIONS.map((option) => {
                const isSelected = formData.interest === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, interest: option.id })
                    }
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#2c3e2e] text-white border-[#2c3e2e] shadow-sm"
                        : "bg-white text-stone-700 border-stone-300 hover:border-stone-400"
                    }`}
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-white ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botón CTA */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group flex items-center justify-center gap-3 bg-[#233325] hover:bg-[#1b281d] text-white font-medium text-sm tracking-wider uppercase py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              <span>{isSubmitting ? "Enviando..." : "Quiero conocer La Emiliana"}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}