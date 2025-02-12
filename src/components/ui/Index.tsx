import { Button } from "./Button"

export default function Index() {
    return (
        <section
            className="p-4 min-h-screen"
            style={
                {
                    backgroundImage: "url('https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/Font3')",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }}
        >  *
            <section>
                <h1 className="title-animate p-2 elegant text-6xl font-bold text-center text-black mt-2">Nos casamos ♥</h1>
                <section className="grid gap-6 bg-gray-100">
                    <section
                        className="p-4 rounded-lg shadow-lg bg-white border-2 border-yellow-500"
                    >
                        <section
                            className="h-80 mb-8 bg-cover bg-center flex items-center justify-center rounded-lg border-2 border-yellow-200"
                            style={{ backgroundImage: "url('https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/LS%2BRing')" }}>
                        </section>
                        <h2 className="title-animate elegant text-black text-4xl font-bold text-center mb-2">Luciana y Sebastian</h2>
                    </section>
                </section>
                <h3 className="text-black text-2xl font-bold elegant text-center mt-4">Ingresar</h3>
                <section className="flex justify-center items-center flex-col">
                    <Button href="/Home" />
                </section>
            </section>
        </section>
    )
} 