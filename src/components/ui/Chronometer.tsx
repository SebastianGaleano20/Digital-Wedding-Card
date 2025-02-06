"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface ChronometerProp {
  ObjetiveDate?: string // Formato: "YYYY-MM-DD"
}

const Chronometer: React.FC<ChronometerProp> = ({ ObjetiveDate = "2025-12-20" }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(ObjetiveDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
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
    <section className="flex flex-col items-center justify-center space-y-4 p-4">
      <section className="flex flex-wrap justify-center items-center gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <section key={unit} className="text-center">
            <section className="bg-blue-500 rounded-lg p-4 w-18 h-18 flex items-center justify-center">
              <span className="text-4xl font-bold elegant">{formatTime(value as number)}</span>
            </section>
            <p className="mt-2 text-2xl font-bold capitalize elegant">{unit}</p>
          </section>
        ))}
      </section>
      {Object.keys(timeLeft).length === 0 && <p className="text-2xl font-bold mt-4">¡Es hoy!</p>}
    </section>
  )
}

export default Chronometer

