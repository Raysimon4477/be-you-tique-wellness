/**
 * Central business configuration for Sheldon's Walking Tours.
 *
 * TODO: Replace WHATSAPP_NUMBER with the real number in international
 * format WITHOUT "+" or spaces (e.g. "27821234567" for +27 82 123 4567).
 * Every WhatsApp button and the booking form use this single value.
 */
export const BUSINESS = {
  name: "Sheldon's Walking Tours",
  tagline: "Hidden Cape Town — street art, architecture, stories & culture",
  city: "Cape Town, South Africa",
  whatsappNumber: "27000000000",
  phoneDisplay: "+27 00 000 0000",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE = `Hi Sheldon! I'd like to find out about booking a walking tour.`;
