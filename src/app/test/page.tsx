import GuestForm from "@/src/components/forms/Form2"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-sky-800 mb-8">Confirmación de Asistencia</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <GuestForm />
        </div>
      </div>
    </main>
  )
}

