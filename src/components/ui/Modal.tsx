"use client"

import { Button } from "./Button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./Dialog"
import { CheckCircle } from "lucide-react"
import type { ConfirmationModalProps } from "@/src/types/components/ui"

export default function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    guestName,
    message,
    allergies,
    isSubmitting,
    submitSuccess,
}: ConfirmationModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-white">
                {submitSuccess ? (
                    <div className="flex flex-col items-center justify-center py-6">
                        <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                        <h2 className="text-xl font-semibold text-center text-sky-800">¡Gracias por confirmar tu asistencia!</h2>
                        <p className="text-center text-gray-600 mt-2">Tu respuesta ha sido registrada correctamente.</p>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-sky-800 text-xl">Confirmar Asistencia</DialogTitle>
                            <DialogDescription className="text-gray-600">
                                Por favor verifica que la información sea correcta antes de enviar.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                            <div className="space-y-1">
                                <p className="font-medium text-sky-800">Nombre:</p>
                                <p className="text-gray-700">{guestName}</p>
                            </div>
                            {message && (
                                <div className="space-y-1">
                                    <p className="font-medium text-sky-800">Mensaje:</p>
                                    <p className="text-gray-700">{message}</p>
                                </div>
                            )}
                            {allergies && (
                                <div className="space-y-1">
                                    <p className="font-medium text-sky-800">Alergias alimentarias:</p>
                                    <p className="text-gray-700">{allergies}</p>
                                </div>
                            )}
                        </div>
                        <DialogFooter className="sm:justify-between">
                            <Button variant="outline" type="button" text="Cancelar" onClick={onClose} className="border-sky-300 text-sky-700 hover:bg-sky-50">

                            </Button>
                            <Button onClick={onConfirm} className="bg-sky-600 hover:bg-sky-700 text-white" disabled={isSubmitting}
                                text={isSubmitting ? "Enviando..." : "Confirmar y Enviar"}>
                            </Button>
                        </DialogFooter>
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}

