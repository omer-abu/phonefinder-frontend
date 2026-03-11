import type { Phone } from "../types/phone"

export function getPhoneImagePath(phone: Phone) {
  let model: string = phone.model

  model = model
    .replace(/\d+GB/gi, "")
    .replace(/\d+TB/gi, "")
    .replace(/\d+(\.\d+)?-inch/gi, "")
    .trim()

  const filename = `${phone.brand}_${model}`.replace(/\s+/g, "_")

  return `${import.meta.env.BASE_URL}phone-images/${filename}.jpg`
}
