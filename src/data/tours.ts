/**
 * Interim photography is hotlinked from Wikimedia Commons (freely licensed;
 * credit links in PHOTO_CREDITS render in the footer). Each photo falls back
 * to the matching illustration if it fails to load. Replace `src` values with
 * the business's own photos when available.
 */
export interface TourPhoto {
  src: string;
  alt: string;
  creditUrl: string;
  creditLabel: string;
}

const commonsPhoto = (file: string, alt: string, creditLabel: string, width = 1280): TourPhoto => ({
  src: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`,
  alt,
  creditUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}`,
  creditLabel,
});

export const HERO_PHOTO = commonsPhoto(
  "Cape Town skyline with Table Mountain.jpg",
  "Cape Town city bowl beneath Table Mountain",
  "Cape Town skyline",
  1920,
);

export interface Tour {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  highlights: string[];
  duration?: string;
  meetingPoint?: string;
  note?: string;
  illustration: "signature" | "bokaap" | "woodstock" | "architecture" | "muizenberg";
  photo?: TourPhoto;
}

export const SIGNATURE_TOUR: Tour = {
  id: "signature-hidden-gems",
  name: "Signature Hidden Gems Tour",
  shortName: "Hidden Gems",
  tagline: "The stories behind Cape Town",
  description:
    "Our flagship walk through the city's best-kept secrets — street art tucked into side lanes, architecture spanning three centuries, and the heritage and culture that shaped the Mother City. This is Cape Town as locals know it: layered, surprising, and full of stories.",
  highlights: [
    "Street art & hidden laneways",
    "Architecture across the centuries",
    "Heritage & living culture",
    "The stories behind Cape Town",
  ],
  duration: "Approx. 3 hours",
  meetingPoint: "Heritage Square / Cape Heritage Hotel area (confirmed on booking)",
  illustration: "signature",
  photo: commonsPhoto(
    "Greenmarket Square, Cape Town.JPG",
    "Greenmarket Square in Cape Town's historic centre",
    "Greenmarket Square",
  ),
};

export const TOURS: Tour[] = [
  {
    id: "bo-kaap",
    name: "Bo-Kaap Walking Tour",
    shortName: "Bo-Kaap",
    tagline: "Cape Malay history & culture",
    description:
      "Walk the cobbled streets of the Bo-Kaap and go beyond the famous colourful houses — into the deeper history of slavery, religion, architecture and community. Hear the story of Tuan Guru and the Auwal Masjid, South Africa's first mosque, and discover how Cape Malay culture continues to shape this remarkable neighbourhood.",
    highlights: [
      "Cape Malay history & culture",
      "Tuan Guru & the Auwal Masjid",
      "Slavery, religion, architecture & community",
      "The deeper story behind the colourful houses",
    ],
    note: "Can be combined with the Cape Malay Cooking Experience.",
    illustration: "bokaap",
    photo: commonsPhoto(
      "Bo-Kaap colourful houses (30114819980).jpg",
      "The colourful houses of the Bo-Kaap",
      "Bo-Kaap houses",
    ),
  },
  {
    id: "woodstock-salt-river",
    name: "Woodstock & Salt River Street Art Tour",
    shortName: "Woodstock & Salt River",
    tagline: "Street art, community & history",
    description:
      "An open-air gallery on the city's eastern edge. Explore world-class murals and street art while uncovering the social and cultural history of Woodstock and Salt River — the local communities, the changing neighbourhood, and the stories painted on its walls.",
    highlights: [
      "Street art & murals",
      "Local communities & neighbourhood history",
      "Social & cultural history",
    ],
    duration: "Approx. 2 hours",
    meetingPoint: "The Old Biscuit Mill, Woodstock",
    illustration: "woodstock",
  },
  {
    id: "architecture-heritage",
    name: "Cape Town Architecture & Heritage Tour",
    shortName: "Architecture & Heritage",
    tagline: "Three centuries of the city in stone",
    description:
      "Read the city like a book — through its buildings. From Cape Dutch gables to Victorian facades and colonial-era landmarks, this walk traces the architectural styles of the historic centre and the heritage and cultural history behind them.",
    highlights: [
      "Historic buildings & architectural styles",
      "Colonial, Victorian & Cape Dutch influences",
      "Stories of the historic city centre",
      "Heritage & cultural history",
    ],
    illustration: "architecture",
    photo: commonsPhoto(
      "CapeTown CityHall.jpg",
      "Cape Town City Hall's Edwardian facade",
      "Cape Town City Hall",
    ),
  },
  {
    id: "muizenberg",
    name: "Muizenberg Walking Tour",
    shortName: "Muizenberg",
    tagline: "Seaside history & character",
    description:
      "Where the mountains meet False Bay. Stroll through Muizenberg's historic streets and along its famous beachfront — taking in the iconic colourful beach huts, the village's seaside character, and the architecture, community and cultural stories of this storied surf town.",
    highlights: [
      "Muizenberg's history & seaside character",
      "Architecture, community & cultural stories",
      "The famous colourful beach huts",
      "Historic areas of the village",
    ],
    illustration: "muizenberg",
    photo: commonsPhoto(
      "Muizenberg Beach Huts.JPG",
      "The famous colourful beach huts at Muizenberg",
      "Muizenberg beach huts",
    ),
  },
];
// Note: the Woodstock tour intentionally keeps its illustration — photographs
// of murals carry the artists' copyright (South Africa has no freedom of
// panorama for artworks), so a commissioned/own photo should be used there.

export const ALL_TOURS: Tour[] = [SIGNATURE_TOUR, ...TOURS];

export interface Experience {
  id: string;
  name: string;
  description: string;
  note?: string;
  photo?: TourPhoto;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "cape-malay-cooking",
    name: "Cape Malay Cooking Experience",
    description:
      "Roll up your sleeves for a hands-on taste of the Bo-Kaap. Learn the secrets of traditional Cape Malay cooking — fragrant curries, folded rotis and generations-old family recipes — hosted and coordinated with a local Bo-Kaap cooking experience.",
    note: "Usually offered together with the Bo-Kaap Walking Tour for the full experience.",
    photo: commonsPhoto(
      "Bobotie South Africa.jpg",
      "Bobotie, a classic Cape Malay dish",
      "Bobotie",
    ),
  },
];

export const PHOTO_CREDITS: TourPhoto[] = [
  HERO_PHOTO,
  ...[SIGNATURE_TOUR, ...TOURS].map((t) => t.photo).filter((p): p is TourPhoto => Boolean(p)),
  ...EXPERIENCES.map((e) => e.photo).filter((p): p is TourPhoto => Boolean(p)),
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "How do I book a tour?",
    answer:
      "Fill in the booking form or tap any WhatsApp button — your request goes straight to Sheldon. No payment is needed to enquire; availability, meeting details and rates are confirmed with you directly on WhatsApp.",
  },
  {
    question: "How much does a tour cost?",
    answer:
      "Rates depend on the tour and the size of your group. Send a WhatsApp message with your preferred tour and dates, and you'll get current pricing straight away.",
  },
  {
    question: "How long are the walks, and how fit do I need to be?",
    answer:
      "Most walks run around two to three hours at a relaxed, easy pace with plenty of stops for stories and photographs. If you can manage a comfortable stroll, you can manage these tours.",
  },
  {
    question: "Can I book a private or customised tour?",
    answer:
      "Yes — every walk can be arranged as a private tour, and routes can be tailored around your interests. Mention what you have in mind in your booking request.",
  },
  {
    question: "What should I bring?",
    answer:
      "Comfortable walking shoes, sunscreen, a hat and water in summer, a light jacket in winter — and your camera. Everything else is taken care of.",
  },
  {
    question: "Where do the tours start?",
    answer:
      "Each tour has its own meeting point — for example, the Signature Hidden Gems Tour gathers around Heritage Square and the Woodstock tour at the Old Biscuit Mill. The exact spot is confirmed when you book.",
  },
];

export const COMING_SOON: { name: string; description: string }[] = [
  {
    name: "District Six — Our Roots, Our Freedom",
    description:
      "The history of District Six: forced removals and apartheid, community resistance and resilience, Cissie Gool, and the \"We are still here\" story.",
  },
  {
    name: "V&A Waterfront Walking Tour",
    description: "The harbour's working history and modern waterfront life.",
  },
  {
    name: "Salt River Explorer",
    description: "A deeper dive into one of Cape Town's most creative quarters.",
  },
  {
    name: "Cape Town Hidden Gems Experience",
    description: "An extended experience built around the city's best-kept secrets.",
  },
];
