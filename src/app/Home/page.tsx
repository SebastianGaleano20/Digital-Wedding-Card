import AboutUs from "@/src/components/sections/AboutUs";
import Itinerary from "@/src/components/sections/Itinerary";
import TextSection from "@/src/components/sections/TextSection";
import Chronometer from "@/src/components/ui/Chronometer";

export default function Home() {
  return (
    <section
      className="m-h-screen bg-white"
    >
      <section>
        <AboutUs />
        <Chronometer />
        <TextSection />
        <Itinerary />
      </section>
    </section>
  );
}