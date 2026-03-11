import { X } from "lucide-react"
import type { Phone } from "../../types/phone"
import { getPhoneImagePath } from "../../utils/getPhoneImagePath"

interface PhoneDetailsProps {
  phone: Phone
  onClose: () => void
}

const PhoneDetails = ({ phone, onClose }: PhoneDetailsProps) => {
  const imgPath = getPhoneImagePath(phone)

  return (
    <div className="phone-details inner-shadow">
      <div className="details-header">
        <h2>
          {phone.brand} {phone.model}
        </h2>
        <button
          className="close-btn"
          onClick={onClose}
        >
          <X
            width={32}
            height={32}
          />
        </button>
      </div>

      <div className="details-content">
        {imgPath && (
          <img
            src={imgPath}
            onError={e => {
              e.currentTarget.removeAttribute("src")
            }}
            alt={`Image for ${phone.brand} ${phone.model}`}
          />
        )}
        <div className="phone-info">
          <div className="detail-item">
            <label>Brand:</label>
            <span>{phone.brand}</span>
          </div>
          <div className="detail-item">
            <label>Model:</label>
            <span>{phone.model}</span>
          </div>
          <div className="detail-item">
            <label>weight:</label>
            <span>{phone.weight}g</span>
          </div>
          <div className="detail-item">
            <label>storage:</label>
            <span>{phone.storage}GB</span>
          </div>
          <div className="detail-item">
            <label>ram:</label>
            <span>{phone.ram}GB</span>
          </div>
          <div className="detail-item">
            <label>Front Camera:</label>
            <span>{phone.front_camera}</span>
          </div>
          <div className="detail-item">
            <label>Back Camera:</label>
            <span>{phone.back_camera}</span>
          </div>
          <div className="detail-item">
            <label>processor:</label>
            <span>{phone.processor}</span>
          </div>
          <div className="detail-item">
            <label>Battery Capacity:</label>
            <span>{phone.battery_capacity}mAh</span>
          </div>
          <div className="detail-item">
            <label>Screen Size:</label>
            <span>{phone.screen_size} inches</span>
          </div>
          <div className="detail-item">
            <label>Launch Price (USA):</label>
            <span>{phone.launch_price_usa}$</span>
          </div>
          <div className="detail-item">
            <label>Launch Year:</label>
            <span>{phone.launch_year}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneDetails
