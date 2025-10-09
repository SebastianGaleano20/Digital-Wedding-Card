"use client";

import { submitRSVP } from "@/src/lib/api";
import { RSVPFormData } from "@/src/types/components/forms";
import type React from "react";
import { useState } from "react";

function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) {
  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
      <div
        className={`rounded-lg px-6 py-4 shadow-lg ${
          type === "success" ? "bg-green-600" : "bg-red-600"
        } text-white`}
      >
        <div className="flex items-center gap-3">
          <p className="font-medium">{message}</p>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [formData, setFormData] = useState<RSVPFormData>({
    firstName: "",
    lastName: "",
    attendChurch: false,
    attendParty: false,
    message: "",
  });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName) {
      showToast("Por favor completa tu nombre y apellido", "error");
      return;
    }

    if (!formData.attendChurch && !formData.attendParty) {
      showToast(
        "Por favor confirma tu asistencia a al menos un evento",
        "error"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await submitRSVP(formData);

      showToast(
        "¡Confirmación enviada! Gracias por confirmar tu asistencia",
        "success"
      );

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        attendChurch: false,
        attendParty: false,
        message: "",
      });
    } catch (error) {
      showToast(
        "No se pudo enviar la confirmación. Intenta nuevamente.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Confirmación de Asistencia
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Por favor completa el formulario para confirmar tu asistencia a
            nuestra boda
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Tu apellido"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-base font-medium text-gray-700">
                Confirmar asistencia a: *
              </label>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    id="attendChurch"
                    name="attendChurch"
                    type="checkbox"
                    checked={formData.attendChurch}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="attendChurch"
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    Ceremonia en la Iglesia
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    id="attendParty"
                    name="attendParty"
                    type="checkbox"
                    checked={formData.attendParty}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="attendParty"
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    Fiesta
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje para los novios
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Escribe un mensaje especial para los novios..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Enviando..." : "Confirmar Asistencia"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
