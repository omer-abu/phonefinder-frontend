import React, { useState, useEffect } from "react"
import RangeSliderWIthLabels from "../ui/RangeSliderWIthLabels"
import useUrlSearchParams from "../../hooks/useUrlSearchParams"
import type { PhoneFilterType } from "../../types/phone"
import { useLocation } from "react-router-dom"
import RangeSliderWithLabels from "../ui/RangeSliderWIthLabels"
import { phoneService } from "../../services/phone.service"

function PhoneFilter() {
  const defaultFilter = {
    brand: "",
    minYear: 2014,
    maxYear: 2026,
    maxPrice: 3000,
    minRam: 6,
    minStorage: 128,
    minBattery: 3000,
    maxBattery: 8000,
    query: "",
  }

  const [brands, setBrands] = useState<string[]>([])
  const [filterToEdit, setFilterToEdit] = useUrlSearchParams(defaultFilter)
  const location = useLocation()

  useEffect(() => {
    loadFilterOptions()
  }, [])

  useEffect(() => {
    setFilterFromUrl()
  }, [location.search])

  useEffect(() => {
    window.dispatchEvent(new Event("filterChange"))
  }, [filterToEdit])

  async function loadFilterOptions() {
    try {
      const response = await phoneService.getPhoneBrands()
      const data = await response.json()
      setBrands(data.sort())
    } catch (err) {
      console.error("Failed to load filter options:", err)
    }
  }

  function setFilterFromUrl() {
    const params = new URLSearchParams(window.location.search)
    console.log(params)

    const newFilter: Partial<PhoneFilterType> = {}

    Object.keys(defaultFilter).forEach(key => {
      const value = params.get(key)
      if (value === null) return

      const k = key as keyof PhoneFilterType
      if (
        [
          "minYear",
          "maxYear",
          "maxPrice",
          "minRam",
          "minStorage",
          "minBattery",
          "maxBattery",
        ].includes(key)
      ) {
        newFilter[k] = Number(value) as any
      } else {
        newFilter[k] = value as any
      }
    })

    console.log(newFilter)
    setFilterToEdit(newFilter)
  }

  function handleChange({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { value, name: field } = target
    setFilterToEdit({ [field]: value })
  }

  function handleYearsChange(values: number[]) {
    setFilterToEdit({
      minYear: values[0],
      maxYear: values[1],
    })
  }

  function handleBatteryChange(values: number[]) {
    setFilterToEdit({
      minBattery: values[0],
      maxBattery: values[1],
    })
  }

  return (
    <div className="phone-filter">
      <div className="filter-group">
        <label htmlFor="brand">Brand:</label>
        <select
          id="brand"
          name="brand"
          value={filterToEdit.brand}
          onChange={handleChange}
        >
          <option value="">All Brands</option>
          {brands.map(brand => (
            <option
              key={brand}
              value={brand}
            >
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="yearRange">Years:</label>
        <RangeSliderWithLabels
          id="yearRange"
          min={2014}
          max={2026}
          value={[filterToEdit.minYear, filterToEdit.maxYear]}
          onValuesChange={handleYearsChange}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="maxPrice">Max Price (USD):</label>
        <div>
          <input
            type="range"
            name="maxPrice"
            id="maxPrice"
            min={0}
            max={3000}
            value={filterToEdit.maxPrice}
            step={50}
            onChange={handleChange}
          />
          <span>{filterToEdit.maxPrice}USD</span>
        </div>
      </div>

      <div className="filter-group">
        <label htmlFor="minRam">Min RAM (GB):</label>
        <div>
          <input
            type="range"
            name="minRam"
            id="minRam"
            min={4}
            max={16}
            value={filterToEdit.minRam}
            step={2}
            onChange={handleChange}
          />
          <span>{filterToEdit.minRam}GB</span>
        </div>
      </div>

      <div className="filter-group">
        <label htmlFor="minStorage">Min Storage (GB):</label>
        <div>
          <input
            type="range"
            name="minStorage"
            id="minStorage"
            min={64}
            max={512}
            value={filterToEdit.minStorage}
            step={64}
            onChange={handleChange}
          />
          <span>{filterToEdit.minStorage}GB</span>
        </div>
      </div>

      <div className="filter-group">
        <label htmlFor="batteryRange">Battery Capacity (mAh):</label>
        <RangeSliderWIthLabels
          id="batteryRange"
          min={3000}
          max={8000}
          defaultValue={[3000, 8000]}
          value={[filterToEdit.minBattery, filterToEdit.maxBattery]}
          step={200}
          units="mAh"
          onValuesChange={handleBatteryChange}
        />
      </div>
    </div>
  )
}

export default PhoneFilter
