import Chronometer from "@/src/components/ui/Chronometer";

export default function Home() {
  return (
    <section
      className="m-h-screen bg-white"
    >
      <section className="text-center p-4">
        <Chronometer />
      </section>
    </section>
  );
}