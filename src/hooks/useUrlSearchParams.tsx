import { useEffect, useState } from "react"

function useUrlSearchParams<T extends Record<string, any>>(defaultValues: T) {
  const [params, setParams] = useState<T>(defaultValues)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const newParams = { ...defaultValues }

    urlParams.forEach((value, key) => {
      const parsedValue = isNaN(Number(value)) ? value : Number(value)
      newParams[key as keyof T] = parsedValue as T[keyof T]
    })

    setParams(newParams)
  }, [])

  const updateParams = (updates: Partial<T>) => {
    setParams(prev => {
      const newParams = { ...prev, ...updates }

      const queryParams = new URLSearchParams()
      Object.entries(newParams).forEach(([key, value]) => {
        if (value !== "" && value !== defaultValues[key as keyof T]) {
          queryParams.set(key, String(value))
        }
      })

      window.history.pushState(
        null,
        "",
        queryParams.toString()
          ? `?${queryParams.toString()}`
          : window.location.pathname
      )

      return newParams
    })
  }

  return [params, updateParams] as const
}

export default useUrlSearchParams
