import Image from "next/image";

export default function TextSection() {
    return (
        <section>
            <section>
                <Image
                    src="https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/Dance"
                    width={600}
                    height={600}
                    alt="LyS" />
            </section>
            <section className="flex flex-col justify-center items-center  p-8">
                <p className="font-medium text-md text-center mt-2 text-slate-950">Llegó el momento de unir nuestras almas en matrimonio y queremos que seas parte de ese día <br /> Gracias por formar parte de nuestra vida y compartir con nosotros un amor inigualable.</p>
            </section>
        </section>
    )
}