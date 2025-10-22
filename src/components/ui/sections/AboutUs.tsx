import Image from "next/image";
export default function AboutUs() {
  return (
    <section>
      <section>
        <section className="relative w-fit">
          <Image
            src="/assets/Index.png"
            alt="image"
            width={600}
            height={600}
            className="object-cover"
          />
        </section>
      </section>
    </section>
  );
}
