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
    <section className="m-4 flex flex-col items-center justify-center space-y-4">
      <section className="flex flex-wrap justify-center items-center gap-2">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <section key={unit} className="text-center">
            <section className="bg-sky-200 rounded-full text-center p-2 w-16 h-16 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">{formatTime(value as number)}</span>
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

