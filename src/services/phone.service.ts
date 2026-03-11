export const phoneService = {
  getPhones,
  getPhoneBrands,
}

const API_URL = import.meta.env.VITE_API_URL

async function getPhones() {
  const url = `${API_URL}/api/phones${window.location.search}`
  const phones = await fetch(url)
  return phones
}

async function getPhoneBrands() {
  const url = `${API_URL}/api/phones/brands`
  const brands = await fetch(url)
  return brands
}
