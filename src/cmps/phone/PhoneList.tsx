import type { Phone } from "../../types/phone"
import PhonePreview from "./PhonePreview"

interface PhoneListProps {
  phones: Phone[]
  onPhoneSelect?: (phone: Phone) => void
}

const PhoneList = ({ phones, onPhoneSelect }: PhoneListProps) => {
  return (
    <ul className="phone-list">
      {phones.map(phone => (
        <li key={phone.id}>
          <PhonePreview
            phone={phone}
            onSelect={onPhoneSelect}
          />
        </li>
      ))}
    </ul>
  )
}

export default PhoneList
