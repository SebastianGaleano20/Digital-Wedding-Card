import Image from "next/image";

export default function Index() {
    return (
        <section className="min-h-screen bg-white p-8">
            <section className="grid gap-8">
                <section
                    className="mt-6 p-4 rounded-lg shadow-lg bg-white border-2 border-yellow-500"
                >
                    <section 
                    className="h-80 mb-8 bg-cover bg-center flex items-center justify-center rounded-lg" 
                    style={{ backgroundImage: "url('https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/LS%2BRing')" }}>
                    </section>
                    <h2 className="title-animate text-black text-2xl font-bold text-center mb-2">Luciana & Sebastian</h2>
                </section>
            </section>
            <h1 className="title-animate text-4xl font-bold text-center text-black mt-8">Nos casamos ♥</h1>
        </section>
    )
} 