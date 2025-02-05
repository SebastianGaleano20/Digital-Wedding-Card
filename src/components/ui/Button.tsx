import { useState } from "react"
import styles from "../../styles/Button.module.css"
import Image from "next/image"

interface ButtonProps {
    onClick?: () => void
}

export function Button({ onClick }: ButtonProps) {
    const [isRotating, setIsRotating] = useState(false)

    const handleClick = () => {
        setIsRotating(true)
        // Llamar a la función onClick proporcionada (si existe)
        if (onClick) {
            onClick()
        }
        // Desactivar la animación después de que termine
        setTimeout(() => {
            setIsRotating(false)
        }, 800) // 800ms es la duración de la animación
    }

    return (
        <button className={`${isRotating ? styles.rotating : ""}`} onClick={handleClick}>
            <Image
                src={"/logo.png"}
                width={130}
                height={130}
                alt="logo"
            />
        </button>
    )
}

