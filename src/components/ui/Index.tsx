import Image from "next/image";

export default function Index() {
    return (
        <section className="min-h-screen bg-white p-8">
            <section className="grid gap-8">
                <section
                    className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                    <section className="h-80 bg-cover bg-center flex items-center justify-center" style={{ paddingBottom: "100%" }, { backgroundImage: "url('https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/LS%2BRing')" }}>
                    </section>
                </section>
            </section>
            <h1 className="title-animate text-4xl font-bold text-center text-black mt-8">Nos casamos ♥</h1>
        </section>
    )
} 