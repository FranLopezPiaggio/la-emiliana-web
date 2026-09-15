// ponytail: hardcoded phone — move to NEXT_PUBLIC_WHATSAPP_PHONE env when number varies by env
export const WHATSAPP_PHONE = "5493764609782";

import {
  getWhatsappMessage,
  type WhatsappOrigin,
  type MessageParams,
} from "./messages";

// ponytail: encodeURIComponent OK <~2k chars; WA truncates long URLs — use shortener if messages exceed
export function buildWaLink(message: string, phone = WHATSAPP_PHONE): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function getWhatsappUrl(
  origin: WhatsappOrigin,
  params?: MessageParams,
  phone?: string
): string {
  return buildWaLink(getWhatsappMessage(origin, params), phone ?? WHATSAPP_PHONE);
}

export function openWhatsapp(
  origin: WhatsappOrigin,
  params?: MessageParams,
  phone?: string
): void {
  window.open(getWhatsappUrl(origin, params, phone), "_blank", "noopener,noreferrer");
}

export type { WhatsappOrigin, MessageParams };
export { getWhatsappMessage } from "./messages";
