import { Clock, MapPin, Sparkles, Check } from "lucide-react";
import { SIGNATURE_TOUR, TOURS, type Tour } from "@/data/tours";
import SmartImage from "@/components/SmartImage";

interface ToursSectionProps {
  onBook: (tourId: string) => void;
}

const TourMeta = ({ tour, light }: { tour: Tour; light?: boolean }) => (
  <div
    className={`flex flex-col gap-2 font-body text-sm ${
      light ? "text-primary-foreground/75" : "text-muted-foreground"
    }`}
  >
    {tour.duration && (
      <span className="flex items-center gap-2">
        <Clock size={15} className={light ? "text-gold-light" : "text-accent"} />
        {tour.duration}
      </span>
    )}
    {tour.meetingPoint && (
      <span className="flex items-start gap-2">
        <MapPin size={15} className={`mt-0.5 shrink-0 ${light ? "text-gold-light" : "text-accent"}`} />
        {tour.meetingPoint}
      </span>
    )}
  </div>
);

const ToursSection = ({ onBook }: ToursSectionProps) => {
  return (
    <section id="tours" className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">The Tours</p>
          <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-primary md:text-5xl">
            Choose your walk
          </h2>
          <p className="mt-5 font-body text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Five walks, one city, countless stories. Each tour is led on foot, at a
            relaxed pace, with plenty of time for questions, photographs and detours.
          </p>
        </div>

        {/* Signature tour — full-width feature */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-ink-deep shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[260px] lg:min-h-full">
              <div className="absolute inset-0">
                <SmartImage photo={SIGNATURE_TOUR.photo} fallback={SIGNATURE_TOUR.illustration} />
              </div>
            </div>
            <div className="p-8 md:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                <Sparkles size={13} /> Signature Tour
              </span>
              <h3 className="mt-5 font-heading text-3xl font-medium leading-tight text-primary-foreground md:text-4xl">
                {SIGNATURE_TOUR.name}
              </h3>
              <p className="mt-2 font-heading text-lg italic text-gold-light">
                {SIGNATURE_TOUR.tagline}
              </p>
              <p className="mt-4 font-body text-sm font-light leading-relaxed text-primary-foreground/80 md:text-base">
                {SIGNATURE_TOUR.description}
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SIGNATURE_TOUR.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 font-body text-sm text-primary-foreground/85">
                    <Check size={15} className="mt-0.5 shrink-0 text-gold-light" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <TourMeta tour={SIGNATURE_TOUR} light />
              </div>
              <button
                onClick={() => onBook(SIGNATURE_TOUR.id)}
                className="mt-8 rounded-full bg-accent px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent-foreground transition-all duration-300 hover:bg-gold hover:text-ink-deep"
              >
                Book This Tour
              </button>
            </div>
          </div>
        </div>

        {/* Remaining tours — grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {TOURS.map((tour) => (
            <article
              key={tour.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
                  <SmartImage photo={tour.photo} fallback={tour.illustration} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h3 className="font-heading text-2xl font-medium leading-tight text-primary md:text-3xl">
                  {tour.name}
                </h3>
                <p className="mt-1 font-heading text-base italic text-accent">{tour.tagline}</p>
                <p className="mt-3 font-body text-sm font-light leading-relaxed text-muted-foreground">
                  {tour.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 font-body text-sm text-foreground/80">
                      <Check size={15} className="mt-0.5 shrink-0 text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <TourMeta tour={tour} />
                </div>
                {tour.note && (
                  <p className="mt-3 rounded-md bg-cream px-4 py-2.5 font-body text-xs leading-relaxed text-muted-foreground">
                    {tour.note}
                  </p>
                )}
                <div className="mt-auto pt-6">
                  <button
                    onClick={() => onBook(tour.id)}
                    className="w-full rounded-full border-2 border-accent px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    Book This Tour
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
