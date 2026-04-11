import { Leaf, Heart, Hand, Sparkles, FlowerIcon, Scissors, Plus, Flame, Sun } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Service {
  name: string;
  duration: string;
  price: string;
  description?: string;
}

interface Category {
  icon: React.ElementType;
  title: string;
  featured?: boolean;
  services: Service[];
}

const categories: Category[] = [
  {
    icon: Heart,
    title: "Spa Packages",
    featured: true,
    services: [
      { name: "Express Pamper", duration: "1 hr", price: "R 200", description: "Price per person" },
      { name: "Love Your Feet Pedicure", duration: "1 hr, 10 mins", price: "R 200" },
      { name: "Couples Pamper Package", duration: "1 hr, 20 mins", price: "R 295", description: "Price per person" },
      { name: "Single Massage", duration: "1 hr", price: "R 200" },
      { name: "Couples Massage", duration: "1 hr", price: "R 195", description: "Price per person" },
    ],
  },
  {
    icon: Sun,
    title: "Facial & Massage Spa",
    featured: true,
    services: [
      { name: "Glow and Unwind for 1 Person", duration: "1 hr, 30 mins", price: "R 320", description: "Full Body, Facial, Head Massage" },
      { name: "Couples Glow and Unwind Package", duration: "1 hr, 30 mins", price: "R 300", description: "Price per person — Full Body, Facial and Head Massage" },
    ],
  },
  {
    icon: Hand,
    title: "Massage",
    services: [
      { name: "Back, Neck and Shoulder", duration: "30 mins", price: "R 190" },
      { name: "Deep Tissue Massage", duration: "1 hr", price: "R 400" },
      { name: "Swedish Massage", duration: "1 hr", price: "R 350" },
    ],
  },
  {
    icon: Sparkles,
    title: "Facials & Skincare",
    services: [
      { name: "Skin Tag Removal", duration: "1 hr", price: "R 200", description: "Consultation required, from R200" },
      { name: "Facial", duration: "1 hr", price: "R 300" },
    ],
  },
  {
    icon: FlowerIcon,
    title: "Nails",
    services: [
      { name: "Express Pedi", duration: "30 mins", price: "R 100", description: "Cut, Shape, Buff and Paint Toenails" },
      { name: "Cut and File Toenails", duration: "15 mins", price: "R 70" },
      { name: "Acrylic or Hard Gel Soak-Off", duration: "35 mins", price: "R 90" },
      { name: "Gel Polish Soak-Off", duration: "25 mins", price: "R 50" },
      { name: "Soft Gel Tips", duration: "1 hr, 30 mins", price: "R 250" },
      { name: "Express Mani", duration: "30 mins", price: "R 120" },
      { name: "Gel Polish Overlay", duration: "1 hr", price: "R 160" },
      { name: "French Nail Art Add-On", duration: "30 mins", price: "R 50", description: "Adding French lines on nails" },
      { name: "Gel Toes", duration: "50 mins", price: "R 150" },
      { name: "Manicure with Nail Polish", duration: "1 hr", price: "R 200" },
      { name: "Full Manicure with Gel", duration: "1 hr, 15 mins", price: "R 260" },
      { name: "Pedicure with Gel", duration: "1 hr, 15 mins", price: "R 280" },
    ],
  },
  {
    icon: Scissors,
    title: "Hair Removal",
    services: [
      { name: "Underarm", duration: "20 mins", price: "R 110" },
      { name: "Hollywood Wax", duration: "1 hr", price: "R 320" },
      { name: "Sideburns", duration: "20 mins", price: "R 90" },
      { name: "Bikini Wax", duration: "20 mins", price: "R 180" },
      { name: "Brazilian Wax", duration: "40 mins", price: "R 280" },
      { name: "Full Leg", duration: "1 hr, 20 mins", price: "R 220" },
      { name: "Chin Wax", duration: "15 mins", price: "R 90" },
      { name: "Lip Wax", duration: "15 mins", price: "R 80" },
      { name: "Brow Wax", duration: "15 mins", price: "R 90" },
      { name: "Brow Tinting", duration: "1 hr, 20 mins", price: "R 90" },
      { name: "Brow Threading", duration: "20 mins", price: "R 100" },
    ],
  },
  {
    icon: Flame,
    title: "Warming Packages",
    services: [
      { name: "Hot Stone Swedish Massage", duration: "1 hr", price: "R 250" },
      { name: "Warm Foot Pamper", duration: "1 hr, 10 mins", price: "R 250", description: "Cuticles, file, buff and gel paint, soak, exfoliate, foot massage and hot paraffin dip" },
    ],
  },
  {
    icon: Plus,
    title: "Add-Ons",
    services: [
      { name: "Express Facial Add-On", duration: "30 mins", price: "R 150" },
      { name: "Full Body Massage Add-On", duration: "20 mins", price: "R 100" },
      { name: "Tip Application Add-On", duration: "30 mins", price: "R 100" },
      { name: "Hot Stones Add-On", duration: "5 mins", price: "R 50" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary font-light">
            Our Services
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {categories.map((category) => (
              <AccordionItem
                key={category.title}
                value={category.title}
                className={`border border-border rounded-2xl bg-background px-6 md:px-8 shadow-sm data-[state=open]:shadow-md transition-shadow duration-500 ${category.featured ? 'mt-2 mb-2' : ''}`}
              >
                <AccordionTrigger className="py-6 hover:no-underline gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center shrink-0">
                      <category.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-heading text-xl md:text-2xl text-primary text-left">
                      {category.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-0 divide-y divide-border">
                    {category.services.map((service) => (
                      <div
                        key={service.name}
                        className="flex items-start justify-between py-4 first:pt-0 last:pb-0"
                      >
                        <div className="flex flex-col gap-0.5">
                          <span className="font-body text-sm md:text-base text-foreground">
                            {service.name}
                          </span>
                          {service.duration && (
                            <span className="font-body text-xs text-muted-foreground">
                              {service.duration}
                            </span>
                          )}
                          {service.description && (
                            <span className="font-body text-xs text-muted-foreground italic">
                              {service.description}
                            </span>
                          )}
                        </div>
                        <span className="font-heading text-lg text-gold shrink-0 ml-4">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
