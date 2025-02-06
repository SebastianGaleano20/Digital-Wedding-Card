import Chronometer from "@/src/components/ui/Chronometer";

export default function Home() {
    return (
       <section className="bg-white h-screen">
          <section>
            <h1>Estas invitado!</h1>
            <p>Queremos que seas parte de este momento</p>
        </section>
        <Chronometer />
       </section>
    );
  }