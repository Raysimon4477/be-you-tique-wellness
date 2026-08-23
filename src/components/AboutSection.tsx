import { SprayCan, Landmark, BookOpen, Users } from "lucide-react";

const PILLARS = [
  {
    icon: SprayCan,
    title: "Street Art",
    text: "World-class murals and hidden pieces in the lanes and side streets most visitors walk straight past.",
  },
  {
    icon: Landmark,
    title: "Architecture",
    text: "Cape Dutch gables, Victorian facades and colonial landmarks — three centuries of the city written in stone.",
  },
  {
    icon: BookOpen,
    title: "Stories",
    text: "The histories behind the buildings and the streets: slavery and freedom, faith and community, loss and resilience.",
  },
  {
    icon: Users,
    title: "Culture",
    text: "Living neighbourhoods, not museum pieces — the people and traditions that make Cape Town what it is today.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Walk With Sheldon</p>
          <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-primary md:text-5xl">
            Cape Town, the way locals know it
          </h2>
          <p className="mt-6 font-body text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Every city has two versions: the one on the postcards, and the one in the
            side streets. Sheldon&rsquo;s Walking Tours is about the second one — small-group
            walks through the Mother City&rsquo;s hidden corners, where street art, architecture
            and heritage come together to tell the real story of Cape Town. From the cobbles
            of the Bo-Kaap to the murals of Woodstock and the beach huts of Muizenberg,
            every walk is built around stories you won&rsquo;t find in a guidebook.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-lg border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon size={26} strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-medium text-primary">{title}</h3>
              <p className="mt-3 font-body text-sm font-light leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
