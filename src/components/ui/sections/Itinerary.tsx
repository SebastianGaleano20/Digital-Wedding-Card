import animation from "@/src/styles/Animation.module.css";
import Image from "next/image";
import { Button } from "../Button";

export default function Itinerary() {
  return (
    <section>
      {/* Fechas */}
      <section
        style={{
          backgroundImage: "url('/assets/font.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {/*Civil*/}
        <section className="flex flex-col justify-center items-center p-14">
          <Image
            className={`${animation.title}`}
            src="/assets/ring.png"
            width={60}
            height={60}
            alt="ring"
          />
          {/*Fecha civil*/}
          <section>
            <section className="ml-5 flex flex-row justify-center items-center gap-3">
              <section className="box p-1">
                <h3 className={`${animation.title} p-gray text-xl`}>MARTES</h3>
              </section>
              <section>
                <h3
                  className={`${animation.title} text-gray-800 text-6xl mb-2`}
                >
                  09
                </h3>
              </section>
              <section className="box p-1">
                <h3 className={`${animation.title} p-gray text-xl`}>
                  DICIEMBRE
                </h3>
              </section>
            </section>
            {/*Contenedor info civil*/}
            <article className="flex flex-col justify-center items-center gap-3 mb-12">
              {/* Info Civil */}
              <Image
                src="/pics/21.jpg"
                alt="civil"
                width={400}
                height={100}
                className={`${animation.title} rounded-lg`}
              />
              <p className={`${animation.title} elegant text-4xl p-gray`}>
                Registro civil - V. Dominico
              </p>
              <p
                className={`${animation.title} font-medium text-sm text-gray-800`}
              >
                Av Centenario 35, Avellaneda, Provincia de Buenos Aires
              </p>
              <Button
                text="CLICK UBICACION"
                url="https://maps.app.goo.gl/24f49EP6qEkt45dn9"
              />
            </article>
          </section>
        </section>

        {/* Iglesia */}
        <section
          style={{
            backgroundImage: "url('/assets/font.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <section>
            <section className="flex flex-col justify-center items-center p-14 text-center">
              <Image
                className={`${animation.title}`}
                src="/assets/ring.png"
                width={60}
                height={60}
                alt="ring"
              />
              {/*Fecha Iglesia */}
              <article className="ml-5 flex flex-row justify-center items-center gap-3">
                <section className="box p-1">
                  <h3 className={`${animation.title} p-gray text-xl`}>
                    SÁBADO
                  </h3>
                </section>
                <section>
                  <h3
                    className={`${animation.title} text-gray-800 text-6xl mb-2`}
                  >
                    20
                  </h3>
                </section>
                <section className="box p-1">
                  <h3 className={`${animation.title} p-gray text-xl`}>
                    DICIEMBRE
                  </h3>
                </section>
              </article>
              {/* Contenedor info iglesia */}
              <article className="flex flex-col justify-center items-center gap-3 mb-20">
                <Image
                  className={`${animation.title} rounded-lg`}
                  src="/assets/parroquia.jpg"
                  width={400}
                  height={100}
                  alt="church"
                />
                <p className={`${animation.title} elegant text-4xl p-gray`}>
                  Parroquia Nuestra Señora de Loreto
                </p>
                <p
                  className={`${animation.title} font-medium text-sm text-gray-800`}
                >
                  Av. Bartolomé Mitre 3779, Sarandí, Provincia de Buenos Aires
                </p>
                <Button
                  text="CLICK UBICACION"
                  url="https://maps.app.goo.gl/Mg2fUvtfVj8zWGov5"
                />
              </article>
            </section>
          </section>
        </section>
      </section>
      {/* Itinerario */}
      <section>
        <Image
          src="/assets/itinerary.png"
          alt="itinerary"
          width={600}
          height={600}
          className={`${animation.title}`}
        />
      </section>
    </section>
  );
}
