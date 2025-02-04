import Image from "next/image";

export default function Index() {
    return (
        <section className="min-h-screen bg-white p-8">
        <h1 className="w-full title-animate text-4xl font-bold text-center text-black mb-8">Nos casamos ♥</h1>
        <section className="grid gap-8">
            <section
              className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <section className="relative w-full" style={{ paddingBottom: "100%" }}>
                <Image
                  src='https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/LS%2BRing'
                  alt='Image'
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded"
                />
              </section>
            </section>
        </section>
      </section>
    )
} 