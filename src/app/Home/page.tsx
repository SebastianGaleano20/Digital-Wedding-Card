"use client";
import Chronometer from "@/src/components/ui/Chronometer";
import AboutUs from "@/src/components/ui/sections/AboutUs";
import InfoSection from "@/src/components/ui/sections/InfoSection";
// import Gallery from "@/src/components/sections/Gallery";
import Itinerary from "@/src/components/ui/sections/Itinerary";
import TextSection from "@/src/components/ui/sections/TextSection";

export default function Home() {
  return (
    <section className="m-h-screen bg-white">
      <section>
        <AboutUs />
        <Chronometer />
        <TextSection />
        <Itinerary />
        <InfoSection />
      </section>
    </section>
  );
}
