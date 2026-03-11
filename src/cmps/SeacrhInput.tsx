interface SeacrhInputProps {
  onSearch: React.ChangeEventHandler<HTMLInputElement>
}

const SeacrhInput = ({ onSearch }: SeacrhInputProps) => {
  return (
    <input
      className="phone-search-input"
      type="search"
      placeholder="Type to search..."
      onChange={onSearch}
    />
  )
}

export default SeacrhInput
