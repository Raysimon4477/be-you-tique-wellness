import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingSection from "@/components/BookingSection";
import { BUSINESS } from "@/config";
import { ALL_TOURS, EXPERIENCES, PHOTO_CREDITS } from "@/data/tours";

/** Enquiries are the whole point of the site — assert the handoff to WhatsApp. */
describe("booking form", () => {
  const openSpy = vi.fn();

  beforeEach(() => {
    openSpy.mockReset();
    vi.stubGlobal("open", openSpy);
  });

  const fillAndSubmit = () => {
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "Ada Lovelace" },
    });
    fireEvent.change(screen.getByLabelText(/which tour/i), {
      target: { value: "bo-kaap" },
    });
    fireEvent.change(screen.getByLabelText(/group size/i), {
      target: { value: "4" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send booking request/i }));
  };

  it("sends the enquiry to the configured WhatsApp number", () => {
    render(<BookingSection selectedTour="" />);
    fillAndSubmit();

    expect(openSpy).toHaveBeenCalledTimes(1);
    const url = openSpy.mock.calls[0][0] as string;
    expect(url.startsWith(`https://wa.me/${BUSINESS.whatsappNumber}?text=`)).toBe(true);
  });

  it("includes the visitor's details in the prefilled message", () => {
    render(<BookingSection selectedTour="" />);
    fillAndSubmit();

    const message = decodeURIComponent(
      (openSpy.mock.calls[0][0] as string).split("?text=")[1],
    );
    expect(message).toContain("Ada Lovelace");
    expect(message).toContain("Bo-Kaap Walking Tour");
    expect(message).toContain("Group size: 4");
    // Blank optional fields must not leave empty labels behind.
    expect(message).not.toContain("Email:");
    expect(message).not.toContain("Preferred date:");
  });

  it("preselects the tour chosen from a tour card", () => {
    render(<BookingSection selectedTour="muizenberg" />);
    expect((screen.getByLabelText(/which tour/i) as HTMLSelectElement).value).toBe(
      "muizenberg",
    );
  });

  it("offers every tour and experience in the dropdown", () => {
    render(<BookingSection selectedTour="" />);
    const options = Array.from(
      (screen.getByLabelText(/which tour/i) as HTMLSelectElement).options,
    ).map((o) => o.value);

    for (const tour of ALL_TOURS) expect(options).toContain(tour.id);
    for (const experience of EXPERIENCES) expect(options).toContain(experience.id);
  });
});

describe("photo credits", () => {
  it("links every hotlinked photo back to its Commons file page", () => {
    expect(PHOTO_CREDITS.length).toBeGreaterThan(0);
    for (const photo of PHOTO_CREDITS) {
      expect(photo.creditUrl).toContain("commons.wikimedia.org/wiki/File:");
      expect(photo.alt.length).toBeGreaterThan(0);
    }
  });
});
