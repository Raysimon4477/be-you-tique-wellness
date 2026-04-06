import { Leaf, Heart, Sparkles, Hand, FlowerIcon, Footprints } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Swedish Massage",
    description: "Gentle, flowing strokes to ease tension and promote deep relaxation.",
    price: "From R450",
  },
  {
    icon: Heart,
    title: "Deep Tissue Massage",
    description: "Targeted pressure to release chronic muscle knots and restore mobility.",
    price: "From R550",
  },
  {
    icon: Hand,
    title: "Back, Neck & Shoulder Massage",
    description: "Focused relief for upper-body stress and stiffness.",
    price: "From R350",
  },
  {
    icon: Sparkles,
    title: "Relaxation Therapy",
    description: "Aromatherapy and gentle techniques for total mind-body rejuvenation.",
    price: "From R500",
  },
  {
    icon: FlowerIcon,
    title: "Basic Deep Cleanse Facial",
    description: "A purifying facial to refresh, cleanse, and revitalise your skin.",
    price: "From R400",
  },
  {
    icon: Footprints,
    title: "Pedicure",
    description: "Foot soak, file & exfoliate for smooth, pampered feet.",
    price: "From R300",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary font-light">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-500 group"
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-cream flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <service.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-2">{service.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="border-t border-border pt-4">
                <span className="font-heading text-lg text-gold">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
