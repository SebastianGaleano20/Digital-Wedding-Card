import { Button } from "./Button"

export default function Index() {
    return (
        <section className="min-h-screen bg-gray-100 p-4">
            <h1 className="title-animate title-elegant text-6xl font-bold text-center text-gray-600 m-6">Nos casamos ♥</h1>
            <section className="grid gap-8">
                <section
                    className="p-4 rounded-lg shadow-lg bg-white border-2 border-yellow-500"
                >
                    <section
                        className="h-80 mb-8 bg-cover bg-center flex items-center justify-center rounded-lg border-2 border-yellow-200"
                        style={{ backgroundImage: "url('https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/LS%2BRing')" }}>
                    </section>
                    <h2 className="title-animate title-elegant text-black text-4xl font-bold text-center mb-2">Luciana & Sebastian</h2>
                </section>
            </section>
                <h3 className="text-black text-2xl font-bold title-elegant text-center mt-4">Ingresar</h3>
            <section className="flex justify-center items-center flex-col">
                <Button href="/Home" />
            </section>
        </section>
    )
} 