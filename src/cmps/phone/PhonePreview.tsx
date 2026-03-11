import type { Phone } from "../../types/phone"
import { getPhoneImagePath } from "../../utils/getPhoneImagePath"

interface PhonePreviewProps {
  phone: Phone
  onSelect?: (phone: Phone) => void
}

const PhonePreview = ({ phone, onSelect }: PhonePreviewProps) => {
  const handleClick = () => {
    onSelect?.(phone)
  }

  const imgPath = getPhoneImagePath(phone)

  return (
    <div
      className="phone-preview"
      onClick={handleClick}
    >
      {imgPath && (
        <img
          src={imgPath}
          onError={e => {
            e.currentTarget.removeAttribute("src")
          }}
          alt={`Image for ${phone.brand} ${phone.model}`}
          loading="lazy"
        />
      )}
      <div className="preview-details">
        <div>
          <p className="preview-model">{phone.model}</p>
          <p className="preview-brand">{phone.brand}</p>
        </div>
      </div>
    </div>
  )
}

export default PhonePreview
