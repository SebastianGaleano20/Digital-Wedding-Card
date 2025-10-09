"use client";
import Chronometer from "@/src/components/ui/Chronometer";
import AboutUs from "@/src/components/ui/sections/AboutUs";
// import Gallery from "@/src/components/sections/Gallery";
import Itinerary from "@/src/components/ui/sections/Itinerary";
import TextSection from "@/src/components/ui/sections/TextSection";
import FormSection from "@/src/components/ui/sections/FormSection";

export default function Home() {
  return (
    <section className="m-h-screen bg-white">
      <section>
        <AboutUs />
        <Chronometer />
        <TextSection />
        <Itinerary />
        <FormSection />
      </section>
    </section>
  );
}
