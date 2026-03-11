import { useEffect, useState } from "react"
import PhoneList from "../cmps/phone/PhoneList"
import PhoneDetails from "../cmps/phone/PhoneDetails"
import type { Phone } from "../types/phone"
import SeacrhInput from "../cmps/SeacrhInput"
import Sidebar from "../cmps/layout/Sidebar"
import AiPromptButton from "../cmps/ai-prompt-cmps/AiPromptButton"
import { debounce } from "ts-debounce"
import useUrlSearchParams from "../hooks/useUrlSearchParams"
import { phoneService } from "../services/phone.service"

const PhoneIndex = () => {
  const [phones, setPhones] = useState<Phone[] | null>(null)
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null)
  const [query, setQuery] = useUrlSearchParams({ query: "" })

  useEffect(() => {
    loadPhones()

    window.addEventListener("filterChange", loadPhones)
    return () => window.removeEventListener("filterChange", loadPhones)
  }, [query])

  async function loadPhones() {
    try {
      const response = await phoneService.getPhones()
      const data = await response.json()

      setPhones(data)
    } catch (err) {
      console.error("Failed to load phones:", err)
    }
  }

  function onSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value
    setQuery({ query })
  }

  const debouncedSearch = debounce(onSearch, 300)

  return (
    <section className="phone-index">
      <div className="search-wrapper">
        <SeacrhInput onSearch={debouncedSearch} />
        <AiPromptButton />
      </div>
      <div
        className={`phone-index-content ${selectedPhone ? "details-open" : ""}`}
      >
        <Sidebar />
        <div className="phone-list-wrapper inner-shadow">
          {phones && phones.length > 0 ? (
            <PhoneList
              phones={phones}
              onPhoneSelect={setSelectedPhone}
            />
          ) : (
            <div>No results that match your filters</div>
          )}
        </div>
        {selectedPhone && (
          <PhoneDetails
            phone={selectedPhone}
            onClose={() => setSelectedPhone(null)}
          />
        )}
      </div>
    </section>
  )
}

export default PhoneIndex
