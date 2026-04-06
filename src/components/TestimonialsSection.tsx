import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayanda M.",
    text: "The most relaxing massage I've ever had. The atmosphere is pure luxury and the therapist truly understood what my body needed.",
  },
  {
    name: "Sarah L.",
    text: "I've been to many spas, but Be'YOU'tique is something special. Intimate, calming, and absolutely professional. I left feeling like a new person.",
  },
  {
    name: "Thandi K.",
    text: "From the moment I walked in, I felt at ease. The deep tissue massage was incredible — my tension melted away completely.",
  },
  {
    name: "James R.",
    text: "A hidden gem! The attention to detail and personalised care make this the best wellness experience in the area. Highly recommend.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Kind Words</p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground font-light">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-primary-foreground/80 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-heading text-gold text-lg">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
