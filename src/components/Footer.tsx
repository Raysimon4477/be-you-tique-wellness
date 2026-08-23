import { MessageCircle } from "lucide-react";
import { BUSINESS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/config";
import { PHOTO_CREDITS } from "@/data/tours";

const Footer = () => {
  return (
    <footer className="border-t border-primary-foreground/10 bg-ink-deep py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-heading text-2xl font-semibold text-primary-foreground">
              Sheldon&rsquo;s{" "}
              <span className="font-body text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
                Walking Tours
              </span>
            </p>
            <p className="mt-2 max-w-xs font-body text-sm font-light leading-relaxed text-primary-foreground/60">
              {BUSINESS.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { label: "Tours", href: "#tours" },
              { label: "Experiences", href: "#experiences" },
              { label: "About", href: "#about" },
              { label: "Book", href: "#book" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60 transition-colors hover:text-gold-light"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-2.5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/85 transition-all duration-300 hover:border-gold-light hover:text-gold-light"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/45">
            &copy; {new Date().getFullYear()} {BUSINESS.name} &middot; {BUSINESS.city}
          </p>
          <p className="mt-3 font-body text-[0.65rem] leading-relaxed text-primary-foreground/35">
            Photography via Wikimedia Commons (free licences):{" "}
            {PHOTO_CREDITS.map((p, i) => (
              <span key={p.creditUrl}>
                {i > 0 && " · "}
                <a
                  href={p.creditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-primary-foreground/20 underline-offset-2 transition-colors hover:text-primary-foreground/60"
                >
                  {p.creditLabel}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
