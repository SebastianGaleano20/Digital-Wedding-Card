'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/Button.module.css";
import Image from "next/image";

interface ButtonProps {
    href?: string;
}

export function Button({ href }: ButtonProps) {
    const [isExpand, setIsExpand] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setIsExpand(true);

        // Esperar a que la animación termine antes de redirigir
        setTimeout(() => {
            setIsExpand(false);
            if (href) {
                router.push(href); // Redirecciona después de 800 ms
            }
        }, 600); // Duración de la animación
    };

    return (
        <button className={`${isExpand ? styles.expand : ""}`} onClick={handleClick}>
            <Image src="/logo.png" width={130} height={130} alt="logo" />
        </button>
    );
}
