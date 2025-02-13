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
                <h3 className={`text-2xl text-center font-bold text-white ${animation.scaleUp}`}>Nos casamos</h3>
                <p className={`${animation.scaleUp} block elegant p-2 font-bold text-white text-center text-5xl z-10`}>Luciana <br />y<br /> Sebastian</p>
                
                <h3 className={`text-center text-2xl font-bold text-white ${animation.scaleUp}`}>20 Diciembre 2025</h3>
            </section>
            <h2 className="font-bold text-4xl text-center elegant m-4 text-gray-800">Te invitamos a celebrar con nosotros</h2>
        </section>
    )
} 