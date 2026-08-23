import { ChevronDown } from "lucide-react";
import { HeroScene } from "@/components/illustrations";

const HeroSection = () => {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-deep">
      <HeroScene />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-ink-deep/30" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-32 text-center">
        <p className="animate-fade-up font-body text-xs font-semibold uppercase tracking-[0.4em] text-gold-light md:text-sm">
          Walking Tours &middot; Cape Town
        </p>
        <h1
          className="mt-6 animate-fade-up font-heading text-5xl font-medium leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.15s", opacity: 0 }}
        >
          The Hidden Stories
          <br />
          of <span className="italic text-gold-light">Cape Town</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl animate-fade-up font-body text-base font-light leading-relaxed text-primary-foreground/85 md:text-lg"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Street art tucked into side lanes. Architecture spanning three centuries.
          Heritage, culture, and the stories the guidebooks miss — explored on foot,
          with a local who knows where to look.
        </p>
        <div
          className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.45s", opacity: 0 }}
        >
          <a
            href="#book"
            className="w-full rounded-full bg-accent px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent-foreground shadow-lg shadow-ink-deep/30 transition-all duration-300 hover:scale-[1.03] hover:bg-gold hover:text-ink-deep sm:w-auto"
          >
            Book a Tour
          </a>
          <a
            href="#tours"
            className="w-full rounded-full border border-primary-foreground/40 px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:border-gold-light hover:text-gold-light sm:w-auto"
          >
            Explore the Tours
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/60 transition-colors hover:text-gold-light"
      >
        <ChevronDown size={30} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
