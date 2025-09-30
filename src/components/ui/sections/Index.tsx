import animation from "@/src/styles/Animation.module.css";
import { Button } from "../ButtonIndex";

export default function Index() {
  return (
    <section
      className="p-2 min-h-screen"
      style={{
        backgroundImage:
          "url('https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/Font3')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <section className="flex flex-col items-end mt-4">
        <h2 className="title-gradient text-4xl elegant">Nuestra boda</h2>
      </section>
      <section>
        <section className="grid mt-4">
          <section className="p-4 rounded-lg shadow-lg bg-white border-2 border-yellow-500">
            <section
              className="h-80 mb-8 bg-cover bg-center flex items-center justify-center rounded-lg border-2 border-yellow-200"
              style={{
                backgroundImage:
                  "url('https://multer-upload-api.s3.us-east-2.amazonaws.com/images/DigitalCard/LS%2BRing')",
              }}
            ></section>
            <h2
              className={`${animation.title} elegant title-gradient text-4xl p-2`}
            >
              Luciana y Sebastian
            </h2>
          </section>
        </section>
        <h3 className="elegant title-gradient mt-4 text-3xl p-2">Ingresar</h3>
        <section className="flex justify-center items-center flex-col">
          <Button href="/Home" />
        </section>
      </section>
    </section>
  );
}
