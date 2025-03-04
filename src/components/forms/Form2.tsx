"use client"

import { useState, useEffect } from "react"
import { Button } from "../ui/Button"
import  Input  from "../ui/Input"
import { Label } from "../ui/Label"
import { Textarea } from "../ui/Textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select"
import ConfirmationModal from "../ui/Modal"
import { saveGuestResponse } from "@/src/app/test/action"

// Lista inicial de invitados (60 nombres)
const initialGuestList = [
  "Ana García",
  "Juan Pérez",
  "María Rodríguez",
  "Carlos López",
  "Laura Martínez",
  "Pedro Sánchez",
  "Sofía Fernández",
  "Miguel González",
  "Lucía Díaz",
  "David Ruiz",
  "Elena Torres",
  "Javier Ramírez",
  "Carmen Jiménez",
  "Antonio Moreno",
  "Isabel Muñoz",
  "Francisco Romero",
  "Marta Alonso",
  "José Gutiérrez",
  "Paula Navarro",
  "Alejandro Domínguez",
  "Cristina Vázquez",
  "Alberto Ramos",
  "Raquel Castro",
  "Fernando Ortega",
  "Silvia Rubio",
  "Roberto Gil",
  "Natalia Serrano",
  "Andrés Molina",
  "Beatriz Morales",
  "Sergio Delgado",
  "Alicia Ortiz",
  "Óscar Suárez",
  "Nuria Blanco",
  "Víctor Medina",
  "Mónica Iglesias",
  "Héctor Herrera",
  "Esther Márquez",
  "Raúl Guerrero",
  "Celia Vega",
  "Ignacio Flores",
  "Lorena Campos",
  "Guillermo Reyes",
  "Susana Caballero",
  "Emilio Cruz",
  "Pilar Calvo",
  "Julio Méndez",
  "Miriam Gallego",
  "Gonzalo Fuentes",
  "Diana Nieto",
  "Tomás Santana",
  "Irene Pascual",
  "Arturo Prieto",
  "Rocío Hidalgo",
  "Samuel Pardo",
  "Noelia Aguilar",
  "Álvaro Rojas",
  "Lidia Benítez",
  "Marcos Marín",
  "Eva Soto",
  "Daniel Vargas",
]

export default function GuestForm() {
  const [availableGuests, setAvailableGuests] = useState<string[]>([])
  const [selectedGuest, setSelectedGuest] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [allergies, setAllergies] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)

  useEffect(() => {
    // Cargar la lista de invitados disponibles
    const loadAvailableGuests = () => {
      const selectedGuests = localStorage.getItem("selectedGuests")
      if (selectedGuests) {
        const parsedSelectedGuests = JSON.parse(selectedGuests)
        setAvailableGuests(initialGuestList.filter((guest) => !parsedSelectedGuests.includes(guest)))
      } else {
        setAvailableGuests([...initialGuestList])
      }
    }

    loadAvailableGuests()
  }, [])

  const handleConfirm = () => {
    if (!selectedGuest) {
      alert("Por favor selecciona un invitado")
      return
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Guardar la respuesta
      await saveGuestResponse({
        name: selectedGuest,
        message,
        allergies,
      })

      // Actualizar la lista de invitados seleccionados en localStorage
      const selectedGuests = localStorage.getItem("selectedGuests")
      const parsedSelectedGuests = selectedGuests ? JSON.parse(selectedGuests) : []

      localStorage.setItem("selectedGuests", JSON.stringify([...parsedSelectedGuests, selectedGuest]))

      // Actualizar la lista de invitados disponibles
      setAvailableGuests(availableGuests.filter((guest) => guest !== selectedGuest))

      setSubmitSuccess(true)

      // Resetear el formulario después de 2 segundos
      setTimeout(() => {
        setSelectedGuest("")
        setMessage("")
        setAllergies("")
        setIsModalOpen(false)
        setIsSubmitting(false)
        setSubmitSuccess(false)
      }, 2000)
    } catch (error) {
      console.error("Error al enviar la respuesta:", error)
      setIsSubmitting(false)
      alert("Hubo un error al enviar tu respuesta. Por favor intenta de nuevo.")
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="guest" className="text-sky-800 font-medium">
          Selecciona tu nombre
        </Label>
        <Select value={selectedGuest} onValueChange={setSelectedGuest}>
          <SelectTrigger className="w-full border-sky-200 focus:ring-sky-500">
            <SelectValue placeholder="Selecciona tu nombre de la lista" />
          </SelectTrigger>
          <SelectContent>
            {availableGuests.length > 0 ? (
              availableGuests.map((guest) => (
                <SelectItem key={guest} value={guest}>
                  {guest}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="none" disabled>
                No hay invitados disponibles
              </SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sky-800 font-medium">
          Mensaje (opcional)
        </Label>
        <Textarea
          id="message"
          placeholder="Escribe un mensaje para los anfitriones"
          className="min-h-[100px] border-sky-200 focus:ring-sky-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="allergies" className="text-sky-800 font-medium">
          Alergias alimentarias (opcional)
        </Label>
        <Input
          id="allergies"
          placeholder="Indica si tienes alguna alergia o restricción alimentaria"
          className="border-sky-200 focus:ring-sky-500"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
        />
      </div>

      <Button onClick={handleConfirm} type="submit" text="Confirmar asistencia">
      </Button>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCancel}
        onConfirm={handleSubmit}
        guestName={selectedGuest}
        message={message}
        allergies={allergies}
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
      />
    </div>
  )
}

