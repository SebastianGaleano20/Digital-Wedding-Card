"use-client"
import Input from "../ui/Input";
import { Button } from "../ui/Button";

export default function Form() {
    return (
        <form action="" className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow  border-2  border-gray-200">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                Nombre completo:<Input type="text" placeholder="Nombre completo" />
            </label>
            <label htmlFor="allergy" className="block mb-2 text-sm font-medium text-gray-900">
                Aclaración:<Input type="text" placeholder="Alergías o intolerancias alimentarias" />
            </label>
            <label htmlFor="song" className="block mb-2 text-sm font-medium text-gray-900">
                Canción:<Input type="text" placeholder="Nombre completo" />
            </label>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                Mensaje:
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"></textarea>
            </label>
            <Button text="Confirmar asistencia" />
        </form>
    )
} 