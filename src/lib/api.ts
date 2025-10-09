import { RSVPResponse, RSVPFormData } from "../types/components/forms";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export async function submitRSVP(data: RSVPFormData): Promise<RSVPResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/guest/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    throw error;
  }
}
