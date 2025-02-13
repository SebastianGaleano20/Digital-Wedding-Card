"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styles from "@/src/styles/Heart.module.css"
import animation from '@/src/styles/Animation.module.css'

interface ChronometerProp {
  ObjetiveDate?: string // Formato: "YYYY-MM-DD"
}

const Chronometer: React.FC<ChronometerProp> = ({ ObjetiveDate = "2025-12-20" }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(ObjetiveDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        DIAS: Math.floor(difference / (1000 * 60 * 60 * 24)),
        HORAS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MIN: Math.floor((difference / 1000 / 60) % 60),
        SEG: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [ObjetiveDate, calculateTimeLeft]) // Added calculateTimeLeft to dependencies

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0")
  }

  return (
    <section className="text-center">
      <h2 className={`text-center text-2xl font-bold text-gray-800 ${animation.scaleUp}`}>20 Diciembre 2025</h2>
      <p className={`text-md font-bold text-gray-600 m-3 ${animation.scaleUp}`}>¡Cuenta regresiva!😍💍</p>
      <section className="grid grid-cols-4 gap-4 md:grid-cols-4 place-items-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <section key={unit} className="text-center m-4">
            <section className={`${styles.heart} text-center`}>
              <span className={`${styles.content} text-lg font-bold text-gray-800 pb-4`}>{formatTime(value as number)}</span>
            </section>
            <p className="mt-2 text-lg font-bold text-gray-600">{unit}</p>
          </section>
        ))}
      </section>
      {Object.keys(timeLeft).length === 0 && <p className="text-2xl font-bold mt-4">¡Es hoy!</p>}
    </section>
  )
}

export default Chronometer

