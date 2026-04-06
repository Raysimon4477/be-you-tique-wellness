import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Find Us</p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary font-light">Location & Hours</h2>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-primary mb-1">Address</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                123 Wellness Street<br />
                Sandton, Johannesburg<br />
                South Africa
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
              <Clock className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-primary mb-1">Hours</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Mon – Fri: 9:00 – 18:00<br />
                Saturday: 9:00 – 15:00<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-primary mb-1">Contact</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                +27 12 345 6789<br />
                hello@beyoutique.co.za
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
