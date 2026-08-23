import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "@/config";

const NAV_ITEMS = [
  { label: "Tours", href: "#tours" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#book" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-ink-deep/95 backdrop-blur-md shadow-lg shadow-ink-deep/20"
          : "bg-gradient-to-b from-ink-deep/70 to-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-heading text-xl font-semibold tracking-wide text-primary-foreground md:text-2xl">
            Sheldon&rsquo;s
          </span>
          <span className="font-body text-[0.65rem] font-medium uppercase tracking-[0.25em] text-gold-light">
            Walking Tours
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/80 transition-colors duration-300 hover:text-gold-light"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full bg-accent px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground transition-all duration-300 hover:bg-gold hover:text-ink-deep"
          >
            Book a Tour
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-primary-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-up border-t border-primary-foreground/10 bg-ink-deep px-4 pb-6 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-body text-sm uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-gold-light"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-accent px-6 py-3 text-center font-body text-sm font-semibold uppercase tracking-wider text-accent-foreground"
          >
            Book a Tour
          </a>
          <p className="mt-4 text-center font-body text-xs text-primary-foreground/50">
            {BUSINESS.city}
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
