export default function AboutUs() {
    return (
        <section>
            <section
                className="h-96 bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/Luz')",
                }}
            >
                <section className="absolute inset-0 bg-gray-600 bg-opacity-50"></section>

                <h1 className="text-5xl md:text-6xl font-bold text-white text-center z-10 elegant title-animate">
                    <span className="block elegant">Luciana</span>
                    <span className="block elegant">y</span>
                    <span className="block elegant mt-2">Sebastian</span>
                </h1>
            </section>
            <h2 className="font-bold text-4xl text-center elegant m-4 text-gray-800">Te invitamos a celebrar con nosotros</h2>
        </section>
    )
} 