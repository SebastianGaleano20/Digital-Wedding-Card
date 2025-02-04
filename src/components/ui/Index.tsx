import Image from "next/image";

export default function Index() {
    return (
        <div className="min-h-screen bg-white p-8">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Nos casamos♥</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-gray-100 p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                <Image
                  src='https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/LS%2BRing'
                  alt='Image'
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded"
                />
              </div>
            </div>
        </div>
      </div>
    )
} 