import { Leaf, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Swedish Massage",
    description: "A gentle, full-body massage using long, flowing strokes to ease tension and promote deep relaxation.",
    price: "From R450",
    duration: "60 min",
  },
  {
    icon: Heart,
    title: "Deep Tissue Massage",
    description: "Targeted pressure to release chronic muscle tension and knots, restoring mobility and comfort.",
    price: "From R550",
    duration: "60 min",
  },
  {
    icon: Sparkles,
    title: "Relaxation Therapy",
    description: "A holistic blend of aromatherapy and gentle massage techniques for total mind-body rejuvenation.",
    price: "From R500",
    duration: "75 min",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-2xl p-8 md:p-10 text-center shadow-sm hover:shadow-md transition-shadow duration-500 group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-cream flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-2xl text-primary mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="border-t border-border pt-4">
                <span className="font-heading text-xl text-gold">{service.price}</span>
                <span className="text-muted-foreground text-xs ml-2 font-body">/ {service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
