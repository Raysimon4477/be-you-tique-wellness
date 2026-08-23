import { UtensilsCrossed, Compass } from "lucide-react";
import { EXPERIENCES, COMING_SOON } from "@/data/tours";
import SmartImage from "@/components/SmartImage";

interface ExperiencesSectionProps {
  onBook: (id: string) => void;
}

const ExperiencesSection = ({ onBook }: ExperiencesSectionProps) => {
  const cooking = EXPERIENCES[0];

  return (
    <section id="experiences" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Beyond the Walk</p>
          <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-primary md:text-5xl">
            Experiences
          </h2>
        </div>

        {/* Cape Malay cooking experience */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="order-2 p-8 md:p-12 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <UtensilsCrossed size={13} /> Taste the Bo-Kaap
              </span>
              <h3 className="mt-5 font-heading text-3xl font-medium leading-tight text-primary md:text-4xl">
                {cooking.name}
              </h3>
              <p className="mt-4 font-body text-sm font-light leading-relaxed text-muted-foreground md:text-base">
                {cooking.description}
              </p>
              {cooking.note && (
                <p className="mt-4 rounded-md bg-cream px-4 py-3 font-body text-sm leading-relaxed text-foreground/75">
                  {cooking.note}
                </p>
              )}
              <button
                onClick={() => onBook(cooking.id)}
                className="mt-8 rounded-full bg-accent px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent-foreground transition-all duration-300 hover:bg-gold hover:text-ink-deep"
              >
                Enquire About This Experience
              </button>
            </div>
            <div className="relative order-1 min-h-[260px] lg:order-2 lg:min-h-full">
              <div className="absolute inset-0">
                <SmartImage photo={cooking.photo} fallback="cooking" />
              </div>
            </div>
          </div>
        </div>

        {/* In development */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-3">
            <Compass size={18} className="text-accent" />
            <h3 className="font-heading text-2xl font-medium text-primary md:text-3xl">
              In development
            </h3>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-center font-body text-sm font-light leading-relaxed text-muted-foreground">
            New walks and experiences currently being crafted. Interested in one of
            these? Get in touch — private arrangements may be possible.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {COMING_SOON.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-dashed border-gold/60 bg-cream/60 p-6 transition-colors duration-300 hover:bg-cream"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-heading text-xl font-medium leading-snug text-primary">
                    {item.name}
                  </h4>
                  <span className="shrink-0 rounded-full bg-gold/20 px-3 py-1 font-body text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-primary">
                    Coming Soon
                  </span>
                </div>
                <p className="mt-2 font-body text-sm font-light leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
