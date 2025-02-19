import animation from '@/src/styles/Animation.module.css'
export default function AboutUs() {
    return (
        <section>
            <section
                className="h-96 bg-cover bg-center bg-no-repeat relative flex flex-col gap-4 items-center justify-center"
                style={{
                    backgroundImage: "url('https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/Luz')",
                }}
            >
                <section className="absolute inset-0 bg-gray-600 bg-opacity-50"></section>
                <h2 className={`${animation.title} text-white font-bolt text-3xl`}>Nos casamos</h2>
                <p className={`${animation.scaleUp} block elegant p-2 font-bold text-white text-center text-5xl z-10`}>Luciana <br />y<br /> Sebastian</p>
                {/* <h2 className={`${animation.title} text-white font-bolt text-3xl`}>20 DICIEMBRE 2025</h2> */}
            </section>
            <h2 className="font-bold text-3xl text-center elegant m-4 text-gray-800">Te invitamos a celebrar con nosotros</h2>
        </section>
    )
} 