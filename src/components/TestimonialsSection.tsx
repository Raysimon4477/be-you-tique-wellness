import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Muneerah Khan",
    text: "Place is small but very relaxing and I enjoyed the massage… it was very lekker. Thank you Charmaine. I received a gift from a colleague that recognised that I needed a little pampering… it was well received 🙂",
  },
  {
    name: "Terry Wallace",
    text: "What an absolutely amazing experience at BeYOUtique Spa! From the moment we arrived, we were warmly welcomed and made to feel comfortable and at ease right away.\n\nWe were then shown to the massage room to prepare for our 60-minute Deep Tissue Massage, and it was nothing short of incredible. The therapists were attentive, skilled, and knew exactly how to work through the tension while still keeping the experience soothing and relaxing.\n\nThe room was peaceful, the atmosphere tranquil, and every detail contributed to a deeply therapeutic and rejuvenating session. We left feeling refreshed, relaxed, and completely renewed.\n\nThank you to the wonderful team for such a professional and comforting experience. I will definitely be coming back soon. Highly recommended.",
  },
  {
    name: "Stacey Campbell",
    text: "Just had the most beautiful experience… We had a couples massage booked for our anniversary and it was absolutely beautiful. The staff was friendly and welcoming. I would definitely recommend them.",
  },
  {
    name: "Aaminah Davids",
    text: "Called early morning to book a massage as I had immense back pain. They were able to accommodate me the same day. The experience was lovely. Very professional.",
  },
  {
    name: "Rene Williams",
    text: "The service was excellent upon making the booking. I got about my baby bump, probably snored a little too, the facial and head massage was the cherry on top. Thank you, I will definitely be back.",
  },
];

const CHAR_LIMIT = 180;

const TestimonialCard = ({ name, text }: { name: string; text: string }) => {
  const isLong = text.length > CHAR_LIMIT;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/20">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <div className="mb-6">
        <p className="font-body text-primary-foreground/80 text-sm leading-relaxed italic whitespace-pre-line">
          "{expanded || !isLong ? text : `${text.slice(0, CHAR_LIMIT).trimEnd()}…`}"
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-body text-accent hover:text-accent/80 text-xs mt-3 transition-colors duration-200 tracking-wide uppercase"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>
      <p className="font-heading text-accent text-lg">{name}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">Kind Words</p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground font-light">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
