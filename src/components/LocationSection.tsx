import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Find Us</p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary font-light">Location & Hours</h2>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-primary mb-1">Address</h3>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-33.881271,18.521083"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-muted-foreground text-sm leading-relaxed hover:text-primary transition-colors"
              >
                Unit 136, Millennium Business Park<br />
                19 Edison Way, Century City<br />
                7441
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
              <Clock className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-primary mb-1">Hours</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Mon – Fri: 9am – 6pm<br />
                Saturday: 9am – 4pm<br />
                Sunday: 9am – 2pm
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-primary mb-1">Contact</h3>
              <a href="tel:+27722679555" className="font-body text-primary text-base font-medium hover:text-gold transition-colors">
                072 267 9555
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-muted-foreground text-center text-base md:text-lg mb-8">
            Conveniently located in Century City for your relaxation needs
          </p>

          <div className="rounded-lg overflow-hidden shadow-sm h-[250px] md:h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.3230122731006!2d18.51762167727411!3d-33.8813339732218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d18f5deb399%3A0xfa0dad579d8ba1e6!2sMillennium%20Business%20Park!5e0!3m2!1sen!2sza!4v1775478801888!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BeYOUtique Location - Millennium Business Park, Century City"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-33.881271,18.521083"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-background font-body text-xs tracking-[0.15em] uppercase px-8 py-3 rounded-full transition-colors"
            >
              Get Directions
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
