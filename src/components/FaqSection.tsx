import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/tours";

const FaqSection = () => {
  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Good to Know</p>
          <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-primary md:text-5xl">
            Questions, answered
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="rounded-lg border border-border bg-card px-6 shadow-sm data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-5 text-left font-body text-base font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 font-body text-sm font-light leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
