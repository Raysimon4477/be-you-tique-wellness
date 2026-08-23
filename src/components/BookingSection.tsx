import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { MessageCircle, MapPin, Clock3, Footprints } from "lucide-react";
import { toast } from "sonner";
import { ALL_TOURS, EXPERIENCES } from "@/data/tours";
import { BUSINESS, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/config";

interface BookingSectionProps {
  selectedTour: string;
}

const OPTIONS = [
  ...ALL_TOURS.map((t) => ({ id: t.id, label: t.name })),
  ...EXPERIENCES.map((e) => ({ id: e.id, label: e.name })),
  { id: "not-sure", label: "Not sure yet — help me choose" },
];

const inputClasses =
  "w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow";

const BookingSection = ({ selectedTour }: BookingSectionProps) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    date: "",
    groupSize: "",
    message: "",
  });

  useEffect(() => {
    if (selectedTour) {
      setForm((f) => ({ ...f, tour: selectedTour }));
    }
  }, [selectedTour]);

  const set = (field: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const tourLabel = OPTIONS.find((o) => o.id === form.tour)?.label ?? "Not specified";
    const lines = [
      `Hi Sheldon! I'd like to book a tour.`,
      ``,
      `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      `Tour: ${tourLabel}`,
      form.date && `Preferred date: ${form.date}`,
      form.groupSize && `Group size: ${form.groupSize}`,
      form.message && ``,
      form.message && `Message: ${form.message}`,
    ].filter((l): l is string => l !== false && l !== undefined);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp…", {
      description: "Your booking request is ready to send. We'll confirm availability with you directly.",
    });
  };

  return (
    <section id="book" className="bg-ink-deep py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact / info column */}
          <div className="lg:col-span-2">
            <p className="section-eyebrow text-gold-light">Book Your Walk</p>
            <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-primary-foreground md:text-5xl">
              Let&rsquo;s hit the streets
            </h2>
            <p className="mt-5 font-body text-base font-light leading-relaxed text-primary-foreground/75">
              Tell us which tour you&rsquo;re interested in and when you&rsquo;d like to walk.
              Your request goes straight to WhatsApp — no payment now, we&rsquo;ll confirm
              availability and details with you directly.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-gold-light">
                  <MessageCircle size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                    WhatsApp
                  </p>
                  <a
                    href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-primary-foreground/70 transition-colors hover:text-gold-light"
                  >
                    {BUSINESS.phoneDisplay} — chat to us directly
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-gold-light">
                  <MapPin size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                    Where
                  </p>
                  <p className="font-body text-sm text-primary-foreground/70">
                    {BUSINESS.city} — meeting points confirmed per tour on booking
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-gold-light">
                  <Clock3 size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                    Duration
                  </p>
                  <p className="font-body text-sm text-primary-foreground/70">
                    Most walks run 2–3 hours at a relaxed pace
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-gold-light">
                  <Footprints size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground">
                    What to bring
                  </p>
                  <p className="font-body text-sm text-primary-foreground/70">
                    Comfortable shoes, sunscreen, water — and your curiosity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-card p-7 shadow-2xl md:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="bf-name" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    Full name *
                  </label>
                  <input
                    id="bf-name"
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="bf-email" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    Email
                  </label>
                  <input
                    id="bf-email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="bf-phone" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="bf-phone"
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+27 ..."
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bf-tour" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    Which tour? *
                  </label>
                  <select
                    id="bf-tour"
                    required
                    value={form.tour}
                    onChange={set("tour")}
                    className={inputClasses}
                  >
                    <option value="" disabled>
                      Select a tour or experience
                    </option>
                    {OPTIONS.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="bf-date" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    Preferred date
                  </label>
                  <input
                    id="bf-date"
                    type="date"
                    value={form.date}
                    onChange={set("date")}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="bf-group" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    Group size
                  </label>
                  <input
                    id="bf-group"
                    type="number"
                    min="1"
                    value={form.groupSize}
                    onChange={set("groupSize")}
                    placeholder="e.g. 2"
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bf-message" className="mb-1.5 block font-body text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    Anything else?
                  </label>
                  <textarea
                    id="bf-message"
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Special interests, accessibility needs, combining tours…"
                    className={inputClasses}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent-foreground transition-all duration-300 hover:bg-gold hover:text-ink-deep"
              >
                <MessageCircle size={18} />
                Send Booking Request via WhatsApp
              </button>
              <p className="mt-4 text-center font-body text-xs leading-relaxed text-muted-foreground">
                Submitting opens WhatsApp with your request pre-filled — just press send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
