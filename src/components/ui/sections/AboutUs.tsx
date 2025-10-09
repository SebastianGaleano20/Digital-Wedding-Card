import animation from "@/src/styles/Animation.module.css";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section>
      <section>
        <section className="relative w-fit">
          <Image
            src="/assets/5.png"
            alt="image"
            width={600}
            height={600}
            className="object-cover"
          />
          <p
            className={`${animation.scaleUp} elegant p-2 font-bold text-white text-center mb-10 text-6xl z-10 absolute inset-0 flex items-end justify-center`}
          >
            Luciana <br />y<br /> Sebastian
          </p>
        </section>

        {/* <h2 className={`${animation.title} text-white font-bolt text-3xl`}>20 DICIEMBRE 2025</h2> */}
      </section>
      <h2 className="font-bold text-3xl text-center elegant m-4 text-gray-800">
        Te invitamos a celebrar con nosotros
      </h2>
    </section>
  );
}
