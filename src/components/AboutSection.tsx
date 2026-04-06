const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
        <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
        <h2 className="font-heading text-4xl md:text-5xl text-primary font-light mb-8">About BeYOUtique</h2>
        <div className="w-16 h-px bg-gold mx-auto mb-10" />
        <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-7">
          BeYOUtique is a modern sanctuary for relaxation, rejuvenation and self-care. Designed with
          calming natural tones, rich teals and soft greys, the space creates the perfect environment
          to unwind and reset.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-7">
          Our focus is simple — helping you feel your best. Whether you're looking to ease muscle tension,
          improve your skin, or enjoy a moment of calm, our experienced and highly trained team delivers
          every treatment with care, precision, and pride.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-7">
          From soothing massages and results-driven facials to expertly finished manicures and pedicures,
          each service is tailored to ensure a seamless and enjoyable experience.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg italic">
          At BeYOUtique, self-care is essential. This is your time to pause, recharge, and be your best self.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
