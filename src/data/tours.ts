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
  },
];

export const ALL_TOURS: Tour[] = [SIGNATURE_TOUR, ...TOURS];

export interface Experience {
  id: string;
  name: string;
  description: string;
  note?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "cape-malay-cooking",
    name: "Cape Malay Cooking Experience",
    description:
      "Roll up your sleeves for a hands-on taste of the Bo-Kaap. Learn the secrets of traditional Cape Malay cooking — fragrant curries, folded rotis and generations-old family recipes — hosted and coordinated with a local Bo-Kaap cooking experience.",
    note: "Usually offered together with the Bo-Kaap Walking Tour for the full experience.",
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
