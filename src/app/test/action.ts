"use server"

interface GuestResponse {
  name: string
  message: string
  allergies: string
}

export async function saveGuestResponse(data: GuestResponse) {
  // Aquí puedes implementar la lógica para guardar la respuesta en una base de datos
  // Por ahora, solo simulamos un retraso para demostrar la funcionalidad
  console.log("Datos recibidos:", data)

  // Simular un retraso de procesamiento
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // En una implementación real, aquí guardarías los datos en una base de datos
  // y manejarías posibles errores

  return { success: true }
}

