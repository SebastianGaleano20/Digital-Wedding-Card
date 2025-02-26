"use client"

import Input from "../ui/Input";
import { Button } from "../ui/Button";
import type { DataForm } from "@/src/types/components/forms";
import { useState } from "react";
import { db } from "../../lib/firebaseConfig";
import { ref, set } from "firebase/database";

export default function Form() {
    const [data, setData] = useState<DataForm>({
        name: "",
        allergy: "",
        song: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const newUserRef = ref(db, "Invitados/" + data.name);
            await set(newUserRef, data);
            console.log("Datos enviados a Firestore:", data);
            setData({
                name: "",
                allergy: "",
                song: "",
                message: "",
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <form onSubmit={handleSubmit} action="" className="max-w-sm mx-auto mt-2 p-4 bg-white rounded-lg shadow  border-2  border-gray-200">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                Nombre completo:<Input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Nombre completo" />
            </label>
            <label htmlFor="allergy" className="block mb-2 text-sm font-medium text-gray-900">
                Aclaración:<Input type="text" name="allergy" value={data.allergy} onChange={handleChange} placeholder="Alergías o intolerancias alimentarias" />
            </label>
            <label htmlFor="song" className="block mb-2 text-sm font-medium text-gray-900">
                Canción:<Input type="text" name="song" value={data.song} onChange={handleChange} placeholder="Nombre completo" />
            </label>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                Mensaje:
                <textarea id="message" rows={4} name="message" value={data.message} onChange={handleChange} placeholder="Mensaje" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"></textarea>
            </label>
            <Button type="submit" text="Confirmar asistencia" />
        </form>
    )
} 