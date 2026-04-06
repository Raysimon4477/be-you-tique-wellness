const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
        <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
        <h2 className="font-heading text-4xl md:text-5xl text-primary font-light mb-8">About Be'YOU'tique</h2>
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
          At Be'YOU'tique, we believe wellness is deeply personal. Our boutique studio was created
          to offer you a sanctuary — a space where every treatment is tailored to your body, your needs,
          and your pace.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
          With years of experience and a passion for holistic healing, we combine expert technique
          with a warm, intimate atmosphere. Here, you're not just a client — you're family.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
