import type { PhoneFilterType } from "../types/phone"

const API_URL = import.meta.env.VITE_API_URL

export async function askLLM(
  prompt: string
): Promise<Partial<PhoneFilterType>> {
  const res = await fetch(`${API_URL}/api/suggest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  })

  if (!res.ok) {
    throw new Error("Request failed")
  }

  const filters: Partial<PhoneFilterType> = JSON.parse(await res.text())
  return filters
}
