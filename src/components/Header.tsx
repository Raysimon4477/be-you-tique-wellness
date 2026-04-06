import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/1234567890?text=Hi%2C%20I%27d%20like%20to%20book%20a%20session";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Services", "About", "Testimonials", "Location"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#" className="font-heading text-2xl font-semibold text-primary tracking-wide leading-none">
          Be'YOU'tique
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-primary-foreground font-body text-xs tracking-[0.15em] uppercase px-5 py-2 rounded-full transition-all duration-300 ml-2"
          >
            Book Now
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border/50 px-4 pb-6 animate-fade-up">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center bg-gold text-primary-foreground font-body text-sm tracking-wider uppercase px-6 py-3 rounded-full"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
