import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ToursSection from "@/components/ToursSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  const [selectedTour, setSelectedTour] = useState("");

  const handleBook = (tourId: string) => {
    setSelectedTour(tourId);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ToursSection onBook={handleBook} />
      <ExperiencesSection onBook={handleBook} />
      <BookingSection selectedTour={selectedTour} />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
