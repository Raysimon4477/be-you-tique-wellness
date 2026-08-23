import type { ReactNode } from "react";

/**
 * Hand-crafted SVG artwork for the site. Each scene is a flat-vector
 * illustration sharing one palette so the site reads as a single system.
 * To swap any scene for a real photograph, replace the component usage
 * with an <img> — layouts don't depend on these being SVGs.
 */

const INK = "#132441";
const INK_DEEP = "#0b1830";
const GOLD = "#d9a04b";
const GOLD_SOFT = "#e9c07c";
const TERRACOTTA = "#c65a33";
const TEAL = "#2e7d8c";
const SAND = "#ead9b8";

/* ---------------------------------- Hero ---------------------------------- */

export const HeroScene = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 1440 810"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0d1c34" />
        <stop offset="42%" stopColor="#28496b" />
        <stop offset="72%" stopColor="#7c6250" />
        <stop offset="88%" stopColor="#d19a5c" />
        <stop offset="100%" stopColor="#e9b877" />
      </linearGradient>
      <radialGradient id="hero-sun" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fbe6b4" />
        <stop offset="55%" stopColor="#f2cd88" />
        <stop offset="100%" stopColor="#f2cd88" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="hero-mountain" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1d3352" />
        <stop offset="100%" stopColor="#0e1e38" />
      </linearGradient>
      <linearGradient id="hero-sea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#152b47" />
        <stop offset="100%" stopColor="#0a1526" />
      </linearGradient>
      <radialGradient id="hero-dusk" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e9b877" stopOpacity="0.55" />
        <stop offset="45%" stopColor="#d19a5c" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#d19a5c" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* sky */}
    <rect width="1440" height="810" fill="url(#hero-sky)" />

    {/* stars */}
    {[
      [120, 80], [260, 140], [420, 60], [610, 110], [760, 50], [930, 90],
      [1080, 150], [1220, 70], [1350, 120], [520, 180], [1160, 200], [80, 210],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2 : 1.3} fill="#fdf3dd" opacity={0.5 - (i % 4) * 0.08} />
    ))}

    {/* twilight glow silhouetting the mountain */}
    <ellipse cx="760" cy="430" rx="640" ry="260" fill="url(#hero-dusk)" />

    {/* sun glow low on the horizon */}
    <circle cx="985" cy="565" r="150" fill="url(#hero-sun)" opacity="0.85" />
    <circle cx="985" cy="565" r="34" fill="#fbe6b4" />

    {/* Lion's Head + Signal Hill (left) */}
    <path
      d="M-40 640 L60 610 L150 570 L215 470 L245 340 L262 330 L280 345 L305 470 L370 580 L430 640 Z"
      fill="url(#hero-mountain)"
      opacity="0.92"
    />

    {/* Table Mountain with Devil's Peak (right) */}
    <path
      d="M330 660 L470 480 L520 380 L560 352 L620 344 L980 344 L1060 356 L1110 400 L1150 380 L1205 300 L1235 286 L1268 305 L1320 430 L1400 580 L1460 650 Z"
      fill="url(#hero-mountain)"
    />

    {/* the tablecloth cloud draping the plateau */}
    <g opacity="0.11" fill="#f4ede0">
      <ellipse cx="700" cy="346" rx="190" ry="26" />
      <ellipse cx="880" cy="352" rx="150" ry="22" />
      <ellipse cx="790" cy="368" rx="120" ry="18" />
      <path d="M600 350 q40 60 18 110 q60 -40 52 -104 Z" opacity="0.7" />
    </g>

    {/* city bowl silhouette */}
    <g>
      <rect x="0" y="640" width="1440" height="80" fill={INK_DEEP} />
      {[
        [90, 596, 34, 44], [140, 608, 26, 32], [200, 588, 40, 52], [270, 604, 30, 36],
        [330, 578, 36, 62], [400, 598, 28, 42], [455, 566, 44, 74], [530, 592, 30, 48],
        [590, 606, 38, 34], [660, 584, 32, 56], [720, 598, 42, 42], [790, 572, 34, 68],
        [850, 596, 30, 44], [910, 608, 40, 32], [980, 588, 30, 52], [1040, 600, 38, 40],
        [1110, 576, 32, 64], [1170, 596, 42, 44], [1250, 586, 34, 54], [1320, 602, 40, 38],
        [1385, 590, 34, 50],
      ].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} fill={INK_DEEP} />
      ))}
      {/* lit windows */}
      {[
        [102, 610], [214, 600], [222, 616], [342, 592], [348, 610], [466, 580],
        [474, 598], [462, 616], [604, 614], [672, 598], [800, 586], [806, 604],
        [862, 608], [992, 600], [1122, 590], [1128, 608], [1262, 598], [1330, 612],
        [736, 610], [536, 604],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="4" height="6" fill={GOLD_SOFT} opacity="0.85" />
      ))}
    </g>

    {/* sea */}
    <rect x="0" y="716" width="1440" height="94" fill="url(#hero-sea)" />
    <g stroke={GOLD_SOFT} strokeWidth="2" strokeLinecap="round" opacity="0.35">
      <line x1="880" y1="736" x2="1080" y2="736" />
      <line x1="930" y1="756" x2="1060" y2="756" />
      <line x1="900" y1="776" x2="1010" y2="776" />
    </g>
    <g stroke="#3d6a8a" strokeWidth="2" strokeLinecap="round" opacity="0.5">
      <line x1="120" y1="748" x2="280" y2="748" />
      <line x1="420" y1="770" x2="560" y2="770" />
      <line x1="620" y1="742" x2="740" y2="742" />
      <line x1="1220" y1="762" x2="1360" y2="762" />
    </g>

    {/* birds */}
    <g stroke="#fdf3dd" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.7">
      <path d="M370 240 q9 -9 18 0 q9 -9 18 0" />
      <path d="M430 268 q7 -7 14 0 q7 -7 14 0" />
      <path d="M1130 220 q8 -8 16 0 q8 -8 16 0" />
    </g>
  </svg>
);

/* ------------------------------ Tour scenes ------------------------------- */

const Frame = ({ children, sky }: { children: ReactNode; sky: [string, string] }) => (
  <svg viewBox="0 0 480 320" className="h-full w-full" aria-hidden="true" role="presentation">
    <defs>
      <linearGradient id={`sky-${sky[0].slice(1)}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={sky[0]} />
        <stop offset="100%" stopColor={sky[1]} />
      </linearGradient>
    </defs>
    <rect width="480" height="320" fill={`url(#sky-${sky[0].slice(1)})`} />
    {children}
  </svg>
);

/** Heritage Square lane — lamplight, bunting and a hidden doorway. */
const SignatureArt = () => (
  <Frame sky={["#20395c", "#c78d55"]}>
    {/* lane walls */}
    <path d="M0 0 L150 40 L150 320 L0 320 Z" fill="#8a5a3f" />
    <path d="M480 0 L330 40 L330 320 L480 320 Z" fill="#6e452f" />
    <path d="M0 0 L150 40 L150 90 L0 60 Z" fill="#734a33" />
    <path d="M480 0 L330 40 L330 90 L480 60 Z" fill="#5c3a27" />
    {/* end wall with arch */}
    <rect x="150" y="40" width="180" height="280" fill="#a06a44" />
    <path d="M195 320 L195 160 Q240 118 285 160 L285 320 Z" fill={INK_DEEP} />
    <path d="M203 320 L203 164 Q240 128 277 164 L277 320 Z" fill="#e7a552" />
    {/* figure in the archway */}
    <g fill={INK_DEEP}>
      <circle cx="240" cy="238" r="9" />
      <path d="M228 288 L232 250 Q240 244 248 250 L252 288 Z" />
    </g>
    {/* bunting */}
    <g>
      <path d="M150 70 Q240 108 330 70" stroke={INK_DEEP} strokeWidth="2" fill="none" />
      {[168, 200, 232, 264, 296].map((x, i) => (
        <path
          key={x}
          d={`M${x} ${86 + Math.sin((i - 2) / 2) * 8} l8 -3 l-2 14 Z`}
          fill={[TERRACOTTA, GOLD, TEAL, "#e2707f", GOLD][i]}
        />
      ))}
    </g>
    {/* windows on lane walls */}
    <g fill={INK_DEEP}>
      <rect x="40" y="110" width="34" height="52" rx="14" />
      <rect x="96" y="140" width="28" height="44" rx="12" />
      <rect x="380" y="120" width="34" height="52" rx="14" />
    </g>
    <g fill={GOLD_SOFT} opacity="0.9">
      <rect x="46" y="118" width="22" height="36" rx="10" />
      <rect x="386" y="128" width="22" height="36" rx="10" />
    </g>
    {/* street lamp */}
    <g>
      <rect x="336" y="150" width="6" height="170" fill={INK_DEEP} />
      <path d="M339 150 L318 138" stroke={INK_DEEP} strokeWidth="5" strokeLinecap="round" />
      <circle cx="314" cy="142" r="10" fill={GOLD_SOFT} />
      <circle cx="314" cy="142" r="18" fill={GOLD_SOFT} opacity="0.25" />
    </g>
    {/* cobbles */}
    <g fill="#5a3826">
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4, 5, 6].map((col) => (
          <ellipse
            key={`${row}-${col}`}
            cx={40 + col * 70 + (row % 2) * 35}
            cy={268 + row * 18}
            rx="26"
            ry="7"
            opacity={0.5 - row * 0.08}
          />
        )),
      )}
    </g>
  </Frame>
);

/** Bo-Kaap — colourful houses beneath the minaret and Signal Hill. */
const BoKaapArt = () => (
  <Frame sky={["#f0c987", "#f7e3bd"]}>
    {/* Signal Hill */}
    <path d="M0 150 Q120 60 300 120 L480 96 L480 320 L0 320 Z" fill="#b98a54" opacity="0.55" />
    {/* minaret */}
    <g>
      <rect x="392" y="96" width="26" height="130" fill="#efe6d6" />
      <path d="M386 96 L424 96 L405 62 Z" fill={TEAL} />
      <rect x="386" y="94" width="38" height="8" fill="#d8c9ae" />
      <circle cx="405" cy="52" r="4" fill={GOLD} />
      <path d="M409 40 a7 7 0 1 0 2 10 a5.4 5.4 0 1 1 -2 -10 Z" fill={GOLD} />
      <rect x="398" y="120" width="14" height="22" rx="7" fill={INK_DEEP} />
    </g>
    {/* row of houses */}
    {[
      { x: 0, w: 100, c: "#e2707f", door: "#8f2f43" },
      { x: 100, w: 96, c: "#4fae8f", door: "#1f6a52" },
      { x: 196, w: 96, c: "#e9b83d", door: "#a4741a" },
      { x: 292, w: 96, c: "#4f7fc2", door: "#2a4f86" },
      { x: 388, w: 92, c: "#c65a33", door: "#87361a" },
    ].map(({ x, w, c, door }, i) => (
      <g key={i}>
        <rect x={x} y={170 - (i % 2) * 14} width={w} height={150 + (i % 2) * 14} fill={c} />
        <rect x={x} y={158 - (i % 2) * 14} width={w} height="12" fill="#f6efe2" />
        {/* door */}
        <rect x={x + w / 2 - 15} y={252} width="30" height="68" rx="3" fill={door} />
        <rect x={x + w / 2 - 15} y={244} width="30" height="8" fill="#f6efe2" />
        {/* windows */}
        <g>
          <rect x={x + 12} y={196} width="24" height="34" fill="#f6efe2" />
          <rect x={x + 16} y={200} width="16" height="26" fill={INK_DEEP} opacity="0.8" />
          <rect x={x + w - 36} y={196} width="24" height="34" fill="#f6efe2" />
          <rect x={x + w - 32} y={200} width="16" height="26" fill={INK_DEEP} opacity="0.8" />
        </g>
        {/* stoep step */}
        <rect x={x + w / 2 - 22} y={314} width="44" height="6" fill="#f6efe2" opacity="0.9" />
      </g>
    ))}
    {/* birds */}
    <g stroke={INK} strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.65">
      <path d="M70 70 q8 -8 16 0 q8 -8 16 0" />
      <path d="M150 100 q6 -6 12 0 q6 -6 12 0" />
    </g>
  </Frame>
);

/** Woodstock — a protea mural mid-paint on an old brick wall. */
const WoodstockArt = () => (
  <Frame sky={["#8fb6bd", "#d8e2dc"]}>
    {/* wall */}
    <rect x="0" y="34" width="480" height="286" fill="#b0684a" />
    <g fill="#9a583c" opacity="0.7">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={(row % 2) * 48 + col * 96 - 24}
            y={40 + row * 36}
            width="88"
            height="28"
            rx="2"
          />
        )),
      )}
    </g>
    {/* mural panel */}
    <rect x="56" y="58" width="288" height="222" fill={INK} rx="4" />
    {/* protea mural */}
    <g transform="translate(200 168)">
      <circle r="86" fill={TEAL} opacity="0.28" />
      {/* outer bracts */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return (
          <path
            key={i}
            d="M0 0 Q10 -34 0 -62 Q-10 -34 0 0"
            fill={i % 2 ? "#e2707f" : TERRACOTTA}
            transform={`rotate(${(a * 180) / Math.PI})`}
          />
        );
      })}
      <circle r="26" fill={GOLD_SOFT} />
      <circle r="16" fill={GOLD} />
      {/* stem + leaves */}
      <path d="M0 60 L0 112" stroke="#4fae8f" strokeWidth="8" strokeLinecap="round" />
      <path d="M0 84 Q-30 78 -40 96 Q-16 102 0 92 Z" fill="#4fae8f" />
      <path d="M0 98 Q28 92 38 110 Q14 116 0 106 Z" fill="#3d8f74" />
    </g>
    {/* paint drips */}
    <g fill={TEAL} opacity="0.8">
      <rect x="98" y="248" width="5" height="26" rx="2.5" />
      <rect x="288" y="240" width="5" height="34" rx="2.5" />
    </g>
    {/* ladder */}
    <g stroke="#efe6d6" strokeWidth="7" strokeLinecap="round">
      <line x1="386" y1="96" x2="366" y2="316" />
      <line x1="442" y1="96" x2="462" y2="316" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={383 - i * 4} y1={126 + i * 44} x2={445 + i * 4} y2={126 + i * 44} />
      ))}
    </g>
    {/* paint tins */}
    <g>
      <rect x="60" y="288" width="34" height="30" rx="3" fill="#efe6d6" />
      <ellipse cx="77" cy="288" rx="17" ry="5" fill={TERRACOTTA} />
      <rect x="104" y="294" width="28" height="24" rx="3" fill="#efe6d6" />
      <ellipse cx="118" cy="294" rx="14" ry="4" fill={TEAL} />
    </g>
  </Frame>
);

/** Historic centre — Cape Dutch gable beside a Victorian facade. */
const ArchitectureArt = () => (
  <Frame sky={["#a8c6d4", "#e9dfc8"]}>
    {/* Table Mountain backdrop */}
    <path d="M0 120 L110 64 L370 64 L480 130 L480 320 L0 320 Z" fill={INK} opacity="0.18" />
    {/* Cape Dutch house */}
    <g>
      <rect x="28" y="176" width="200" height="144" fill="#f6efe2" />
      {/* thatch roof */}
      <path d="M18 176 L238 176 L218 150 L38 150 Z" fill="#7a5b3a" />
      {/* ornate gable */}
      <path
        d="M92 176 L92 150 Q92 136 104 132 Q100 118 114 114 Q112 98 128 98 Q144 98 142 114 Q156 118 152 132 Q164 136 164 150 L164 176 Z"
        fill="#f6efe2"
        stroke="#d8c9ae"
        strokeWidth="2"
      />
      <rect x="118" y="122" width="20" height="26" rx="2" fill={INK_DEEP} />
      {/* door + shutter windows */}
      <rect x="112" y="244" width="32" height="76" rx="2" fill="#2f5d44" />
      <rect x="112" y="238" width="32" height="6" fill="#d8c9ae" />
      <g>
        {[46, 176].map((x) => (
          <g key={x}>
            <rect x={x} y={210} width="34" height="48" fill={INK_DEEP} />
            <rect x={x - 8} y={210} width="8" height="48" fill="#2f5d44" />
            <rect x={x + 34} y={210} width="8" height="48" fill="#2f5d44" />
            <line x1={x + 17} y1={210} x2={x + 17} y2={258} stroke="#f6efe2" strokeWidth="2" />
            <line x1={x} y1={234} x2={x + 34} y2={234} stroke="#f6efe2" strokeWidth="2" />
          </g>
        ))}
      </g>
    </g>
    {/* Victorian terrace */}
    <g>
      <rect x="268" y="132" width="184" height="188" fill="#c9767f" />
      <rect x="262" y="124" width="196" height="10" fill={INK} />
      <path d="M262 124 L360 96 L458 124 Z" fill={INK} />
      {/* broekie-lace balcony */}
      <rect x="268" y="212" width="184" height="8" fill="#f6efe2" />
      <g stroke="#f6efe2" strokeWidth="3">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line key={i} x1={278 + i * 21} y1={220} x2={278 + i * 21} y2={244} />
        ))}
        <line x1="268" y1="244" x2="452" y2="244" />
      </g>
      <g stroke="#f6efe2" strokeWidth="2.4" fill="none" opacity="0.9">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path key={i} d={`M${278 + i * 21} 220 q10.5 10 21 0`} />
        ))}
      </g>
      {/* upper windows */}
      {[288, 344, 400].map((x) => (
        <g key={x}>
          <rect x={x} y={148} width="30" height="52" rx="15" fill="#f6efe2" />
          <rect x={x + 4} y={152} width="22" height="44" rx="11" fill={INK_DEEP} />
        </g>
      ))}
      {/* shopfront */}
      <rect x="284" y="256" width="64" height="64" rx="2" fill={INK_DEEP} />
      <rect x="368" y="256" width="56" height="64" rx="2" fill="#f6efe2" />
      <rect x="374" y="262" width="44" height="52" rx="2" fill={INK_DEEP} />
    </g>
    {/* pavement */}
    <rect x="0" y="308" width="480" height="12" fill="#b8a684" />
  </Frame>
);

/** Muizenberg — the famous beach huts on the False Bay shore. */
const MuizenbergArt = () => (
  <Frame sky={["#7db3cf", "#eadfbe"]}>
    {/* Muizenberg peak */}
    <path d="M0 160 L90 66 L170 118 L260 88 L360 150 L480 128 L480 320 L0 320 Z" fill="#7f9789" opacity="0.6" />
    {/* sun */}
    <circle cx="404" cy="58" r="26" fill="#fbe6b4" />
    {/* sea */}
    <rect x="0" y="176" width="480" height="70" fill={TEAL} />
    <g stroke="#eaf4ef" strokeWidth="3" strokeLinecap="round" opacity="0.7">
      <line x1="30" y1="196" x2="110" y2="196" />
      <line x1="180" y1="210" x2="250" y2="210" />
      <line x1="330" y1="192" x2="410" y2="192" />
      <line x1="90" y1="228" x2="150" y2="228" />
      <line x1="380" y1="226" x2="450" y2="226" />
    </g>
    {/* sand */}
    <path d="M0 246 Q240 232 480 246 L480 320 L0 320 Z" fill={SAND} />
    {/* beach huts */}
    {[
      { x: 40, c: TERRACOTTA, t: "#f6efe2" },
      { x: 150, c: "#e9b83d", t: INK },
      { x: 260, c: "#4f7fc2", t: "#f6efe2" },
      { x: 370, c: "#4fae8f", t: "#f6efe2" },
    ].map(({ x, c, t }, i) => (
      <g key={i}>
        <rect x={x} y={196} width="74" height="86" fill={c} />
        {/* vertical stripes */}
        <rect x={x + 12} y={196} width="14" height="86" fill={t} opacity="0.85" />
        <rect x={x + 48} y={196} width="14" height="86" fill={t} opacity="0.85" />
        <path d={`M${x - 6} 196 L${x + 37} 168 L${x + 80} 196 Z`} fill={INK} />
        <rect x={x + 27} y={232} width="20" height="50" fill={INK_DEEP} />
        {/* stilts */}
        <rect x={x + 6} y={282} width="6" height="14" fill={INK} />
        <rect x={x + 62} y={282} width="6" height="14" fill={INK} />
      </g>
    ))}
    {/* gulls */}
    <g stroke={INK} strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.7">
      <path d="M110 92 q8 -8 16 0 q8 -8 16 0" />
      <path d="M310 62 q7 -7 14 0 q7 -7 14 0" />
    </g>
    {/* surfboard in the sand */}
    <g transform="rotate(-8 468 290)">
      <ellipse cx="468" cy="288" rx="12" ry="34" fill="#e2707f" />
      <line x1="468" y1="258" x2="468" y2="318" stroke="#f6efe2" strokeWidth="3" />
    </g>
  </Frame>
);

export const TourIllustration = ({ variant }: { variant: string }) => {
  switch (variant) {
    case "bokaap":
      return <BoKaapArt />;
    case "woodstock":
      return <WoodstockArt />;
    case "architecture":
      return <ArchitectureArt />;
    case "muizenberg":
      return <MuizenbergArt />;
    case "cooking":
      return <CookingArt />;
    default:
      return <SignatureArt />;
  }
};

/** Cape Malay cooking — the pot, the spices, the table. */
export const CookingArt = () => (
  <Frame sky={["#2a4460", "#845d43"]}>
    {/* kitchen window with minaret view */}
    <rect x="304" y="42" width="130" height="120" rx="8" fill="#efe0c2" />
    <rect x="312" y="50" width="114" height="104" rx="6" fill="#f0c987" />
    <path d="M312 154 Q360 120 426 138 L426 154 Z" fill="#b98a54" opacity="0.7" />
    <g>
      <rect x="392" y="82" width="12" height="60" fill="#efe6d6" />
      <path d="M389 82 L407 82 L398 66 Z" fill={TEAL} />
    </g>
    <line x1="369" y1="50" x2="369" y2="154" stroke="#efe0c2" strokeWidth="5" />
    {/* table */}
    <rect x="0" y="238" width="480" height="14" fill="#5a3826" />
    <rect x="0" y="252" width="480" height="68" fill="#6e452f" />
    {/* pot */}
    <g>
      <ellipse cx="150" cy="238" rx="86" ry="12" fill="#3f2a1c" />
      <path d="M70 236 Q70 200 96 188 L204 188 Q230 200 230 236 Q230 244 150 246 Q70 244 70 236 Z" fill={TERRACOTTA} />
      <path d="M96 188 L204 188 L198 176 Q150 168 102 176 Z" fill="#a34524" />
      <ellipse cx="150" cy="182" rx="42" ry="8" fill={GOLD_SOFT} opacity="0.9" />
      {/* handles */}
      <path d="M70 210 q-18 6 -8 22" stroke="#8a3a1e" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M230 210 q18 6 8 22" stroke="#8a3a1e" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* steam */}
      <g stroke="#f4ede0" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.75">
        <path d="M120 160 q-12 -22 4 -40 q14 -16 4 -34" />
        <path d="M152 156 q-10 -20 6 -38 q14 -16 2 -32" />
        <path d="M184 162 q-12 -22 2 -38 q12 -14 4 -30" />
      </g>
    </g>
    {/* spice bowls */}
    {[
      { x: 292, c: "#c65a33" },
      { x: 352, c: "#e9b83d" },
      { x: 412, c: "#8f5d2c" },
    ].map(({ x, c }, i) => (
      <g key={i}>
        <path d={`M${x - 26} 222 Q${x} 246 ${x + 26} 222 L${x + 22} 236 Q${x} 250 ${x - 22} 236 Z`} fill="#efe6d6" />
        <ellipse cx={x} cy={222} rx="26" ry="8" fill="#d8c9ae" />
        <ellipse cx={x} cy={220} rx="20" ry="6" fill={c} />
        <ellipse cx={x} cy={216} rx="10" ry="4" fill={c} />
      </g>
    ))}
    {/* rotis */}
    <g>
      <ellipse cx="70" cy="286" rx="52" ry="12" fill="#e9d3a8" />
      <ellipse cx="70" cy="280" rx="52" ry="12" fill="#f0deb8" />
      <ellipse cx="70" cy="274" rx="52" ry="12" fill="#e9d3a8" />
      <g fill="#c9a86a">
        <circle cx="48" cy="272" r="3" />
        <circle cx="80" cy="270" r="3" />
        <circle cx="96" cy="276" r="2.5" />
      </g>
    </g>
    {/* chillies */}
    <g>
      <path d="M300 268 q26 -4 40 12 q-24 8 -40 -4 Z" fill={TERRACOTTA} />
      <path d="M300 268 q-6 -6 -12 -4" stroke="#3d8f74" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M356 284 q24 -10 42 2 q-20 12 -42 6 Z" fill="#a34524" />
      <path d="M356 284 q-7 -4 -12 0" stroke="#3d8f74" strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  </Frame>
);
