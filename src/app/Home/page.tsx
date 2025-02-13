import AboutUs from "@/src/components/sections/AboutUs";
import Chronometer from "@/src/components/ui/Chronometer";

export default function Home() {
  return (
    <section
      className="m-h-screen bg-white"
    >
      <section>
        <AboutUs />
        <Chronometer />
      </section>
    </section>
  );
}