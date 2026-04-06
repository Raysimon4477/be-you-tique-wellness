import { Leaf, Heart, Hand, Sparkles, FlowerIcon, Scissors, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    icon: Hand,
    title: "Massage",
    services: [
      { name: "Back, Neck & Shoulder", duration: "30 mins", price: "R190" },
      { name: "Deep Tissue Massage", duration: "1 hr", price: "R350" },
      { name: "Swedish Massage", duration: "1 hr", price: "R300" },
    ],
  },
  {
    icon: Sparkles,
    title: "Facial & Skincare",
    services: [
      { name: "Facial", duration: "1 hr", price: "R300" },
      { name: "Skin Tag Removal (Consultation)", duration: "", price: "From R200" },
    ],
  },
  {
    icon: FlowerIcon,
    title: "Nails",
    services: [
      { name: "Express Pedi", duration: "", price: "R100" },
      { name: "Cut & File Toenails", duration: "", price: "R70" },
      { name: "Acrylic or Hard Gel Soak Off", duration: "", price: "R90" },
      { name: "Gel Polish Soak Off", duration: "", price: "R50" },
      { name: "Soft Gel Tips", duration: "", price: "R250" },
      { name: "Express Mani", duration: "", price: "R120" },
      { name: "Gel Polish Overlay", duration: "", price: "R160" },
      { name: "French Nail Art", duration: "", price: "R50" },
      { name: "Gel Toes", duration: "", price: "R150" },
      { name: "Manicure with Polish", duration: "", price: "R200" },
      { name: "Full Mani with Gel", duration: "", price: "R240" },
      { name: "Pedicure with Gel", duration: "", price: "R260" },
    ],
  },
  {
    icon: Scissors,
    title: "Hair Removal",
    services: [
      { name: "Underarm", duration: "", price: "R110" },
      { name: "Hollywood Wax", duration: "", price: "R320" },
      { name: "Side Burns", duration: "", price: "R90" },
      { name: "Bikini Wax", duration: "", price: "R180" },
      { name: "Brazilian Wax", duration: "", price: "R280" },
      { name: "Full Leg", duration: "", price: "R220" },
      { name: "Chin Wax", duration: "", price: "R90" },
      { name: "Lip Wax", duration: "", price: "R80" },
      { name: "Brow Wax", duration: "", price: "R90" },
      { name: "Brow Tinting", duration: "", price: "R90" },
      { name: "Brow Threading", duration: "", price: "R100" },
    ],
  },
  {
    icon: Heart,
    title: "Spa Packages",
    services: [
      { name: "Facial & Full Body Massage", duration: "", price: "R295" },
      { name: "Express Pamper", duration: "", price: "R200" },
      { name: "Love Your Feet Pedicure", duration: "", price: "R200" },
      { name: "Couples Pamper Package", duration: "", price: "R295" },
      { name: "Single Massage", duration: "", price: "R200" },
      { name: "Couples Massage", duration: "", price: "R195" },
    ],
  },
  {
    icon: Plus,
    title: "Add-ons",
    services: [
      { name: "Express Facial", duration: "30 mins", price: "R150" },
      { name: "Add on Full Body", duration: "20 mins", price: "R100" },
      { name: "Add Tips", duration: "", price: "R100" },
      { name: "Hot Stones", duration: "", price: "R50" },
      { name: "Gel Toes", duration: "", price: "R100" },
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
                className="border border-border rounded-2xl bg-background px-6 md:px-8 shadow-sm data-[state=open]:shadow-md transition-shadow duration-500"
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
                        className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
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
