import animation from "@/src/styles/Animation.module.css";
import Image from "next/image";
import { Button } from "../Button";

export default function Itinerary() {
  return (
    <section>
      <section className="flex flex-col justify-center items-center gap-3">
        <Image
          className={`${animation.title}`}
          src="/ring.png"
          width={60}
          height={60}
          alt="ring"
        />
        <section className="flex flex-col justify-center items-center gap-3">
          <section className="ml-5 flex flex-row justify-center items-center gap-3">
            <section className="box p-1">
              <h3 className={`${animation.title} p-gray text-xl`}>MARTES</h3>
            </section>
            <section>
              <h3 className={`${animation.title} text-gray-800 text-6xl mb-2`}>
                09
              </h3>
            </section>
            <section className="box p-1">
              <h3 className={`${animation.title} p-gray text-xl`}>DICIEMBRE</h3>
            </section>
          </section>
          <Image
            src="/lys.jpg"
            alt="civil"
            width={400}
            height={100}
            className={`${animation.title} rounded-lg`}
          />
          <p className={`${animation.title} elegant text-4xl p-gray`}>
            Registro civil - V. Dominico
          </p>
          <p className={`${animation.title} font-medium text-sm text-gray-800`}>
            Av Centenario 35, Avellaneda, Provincia de Buenos Aires
          </p>
          <Button
            text="CLICK UBICACION"
            url="https://maps.app.goo.gl/24f49EP6qEkt45dn9"
          />
        </section>
        <section className="ml-5 flex flex-row justify-center items-center gap-2">
          <section className="box p-1">
            <h3 className={`${animation.title} p-gray text-xl`}>SÁBADO</h3>
          </section>
          <section>
            <h3 className={`${animation.title} text-gray-800 text-6xl mb-2`}>
              20
            </h3>
          </section>
          <section className="box p-1">
            <h3 className={`${animation.title} p-gray text-xl`}>DICIEMBRE</h3>
          </section>
        </section>
        <Image
          className={`${animation.title} rounded-lg`}
          src="/parroquia.jpg"
          width={400}
          height={100}
          alt="church"
        />
        <p className={`${animation.title} elegant text-4xl p-gray`}>
          Parroquia Nuestra Señora de Loreto
        </p>
        <p className={`${animation.title} font-medium text-sm text-gray-800`}>
          Av. Bartolomé Mitre 3779, Sarandí, Provincia de Buenos Aires
        </p>
        <Button
          text="CLICK UBICACION"
          url="https://maps.app.goo.gl/Mg2fUvtfVj8zWGov5"
        />
      </section>
      <section>
        <Image
          src="/itinerary.png"
          alt="itinerary"
          width={600}
          height={600}
          className={`${animation.title}`}
        />
      </section>
    </section>
  );
}
