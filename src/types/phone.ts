export interface Phone {
  id: number
  brand: string
  model: string
  weight: number
  storage: number
  ram: number
  front_camera: string
  back_camera: string
  processor: string
  battery_capacity: number
  screen_size: number
  launch_price_usa: number
  launch_year: number
  [key: string]: unknown
}

export interface PhoneFilterType {
  brand?: string
  minYear?: number
  maxYear?: number
  maxPrice?: number
  minRam?: number
  minStorage?: number
  minBattery?: number
  maxBattery?: number
  query?: string
}
