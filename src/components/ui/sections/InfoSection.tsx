import Image from "next/image";

export default function InfoSection() {
    return (
        <section className="bg-white grid grid-cols-3">
            <article className="max-h-full">
                <Image
                    src="https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/FlowerLeft~2.jpg"
                    width={120}
                    height={150}
                    alt="flowers"
                />
            </article>
            <article className="text-center p-4 col-span-2 grid">
                <h2 className="text-4xl mt-4 font-bold elegant">Codigo de vestimenta</h2>
                <p className="text-md font-medium mt-8 text-gray-800 ">
                    Elegante 🕺💃! <br />
                </p>
            </article>
        </section>
    )
}