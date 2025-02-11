import Chronometer from "@/src/components/ui/Chronometer";

export default function Home() {
    return (
       <section 
       className="m-h-screen bg-white"
      >
       
          <section className="text-center p-4">
            <h2 className="text-5xl text-gray-600 font-bold elegant">Estas invitado!</h2>
            <p className="text-lg m-4 font-bold text-gray-800">Queremos que seas parte de este momento</p>
        <Chronometer />
        </section>
       </section>
    );
  }