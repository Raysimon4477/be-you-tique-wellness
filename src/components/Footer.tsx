const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="font-heading text-2xl text-primary-foreground mb-2">Be'YOU'tique</p>
        <p className="font-body text-primary-foreground/50 text-xs tracking-widest uppercase">
          Boutique Massage & Wellness
        </p>
        <div className="w-12 h-px bg-gold mx-auto my-6" />
        <p className="font-body text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Be'YOU'tique. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
