import Chronometer from "@/src/components/ui/Chronometer";

export default function Home() {
    return (
       <section 
       className="m-h-screen w-screen"
       >
          <section className="bg-sky-300 text-center">
            <h2 className="text-3xl elegant">Estas invitado!</h2>
            <p className="elegant text-lg">Queremos que seas parte de este momento</p>
        <Chronometer />
        </section>
       </section>
    );
  }