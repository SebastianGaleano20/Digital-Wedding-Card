import Image from "next/image"
import animation from "@/src/styles/Animation.module.css"

export const ButtonMap = () => {
    return (
            <button className={`${animation.button} flex flex-col items-center justify-center gap-2`}>
                <a href="https://maps.app.goo.gl/V6yzbg5xaFrKK4yL6" target="_blank">
                    <Image src={"/map.svg"} width={60} height={60} alt="map" />
                </a>
            </button>
    )
}