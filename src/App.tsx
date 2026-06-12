import { useState } from "react";
import Hero from "./components/Hero";
import PlacesExplorer from "./components/PlacesExplorer";
import HistoryTimeline from "./components/HistoryTimeline";
import TripPlanner from "./components/TripPlanner";
import CulturalGuide from "./components/CulturalGuide";
import TravelEssentials from "./components/TravelEssentials";
import Footer from "./components/Footer";

export default function App() {
  // Global Bilingual Mode State:
  // "en"   -> English only
  // "ur"   -> Urdu only (translated text in Nastaliq linespaces)
  // "both" -> Dual view displaying both translations side-by-side for an immersive bilingual reading experience
  const [lang, setLang] = useState<"en" | "ur" | "both">("both");

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-pak-green selection:text-pak-gold antialiased">
      {/* 1. Header & Full-bleed Hero Visual Banner */}
      <Hero lang={lang} setLang={setLang} />

      {/* 2. Panoramic Famous Places Explorer Grid (with popout modal) */}
      <PlacesExplorer lang={lang} />

      {/* 3. Deep Historical Chronicle Timeline (Multi-Era filters) */}
      <HistoryTimeline lang={lang} />

      {/* 4. Interactive Virtual Journey Planner Iteration */}
      <TripPlanner lang={lang} />

      {/* 5. Cultural Treasures (Gastronomy savory & Urdu Language Coach) */}
      <CulturalGuide lang={lang} />

      {/* 6. Travel Prep Guide (nadra E-visa policy & Currency conversion calculative tool) */}
      <TravelEssentials lang={lang} />

      {/* 7. Footer Instructions detailing how to compile & host live on GitHub Pages */}
      <Footer />
    </div>
  );
}
