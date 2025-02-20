import Image from "next/image";

export default function Gallery() {
    return (
        <section className="grid grid-flow-col grid-rows-2 gap-2 bg-blue-300">
            <section className="row-span-3">
                <Image
                    src="https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/LyS.jpeg"
                    width={200}
                    height={600}
                    alt="" />
                <Image
                    src="https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/Moto"
                    width={200}
                    height={600}
                    alt="" />
            </section>
            <section className="col-span-2 ">
                <Image
                    src="https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/Collage3"
                    width={200}
                    height={400}
                    alt="" />
            </section>
            <section className="col-span-2">
                <Image
                    src="https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/Lys3"
                    width={200}
                    height={400}
                    alt="" />
            </section>
        </section>
    )
} 