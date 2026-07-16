import './AttributePicker.css'

function AttributePicker({ label, options, value, onChange }) {
  return (
    <fieldset className="attribute-picker">
      <legend>{label}</legend>
      <div className="attribute-picker-options">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`attribute-picker-option${option.value === value ? ' selected' : ''}`}
            onClick={() => onChange(option.value)}
            aria-pressed={option.value === value}
          >
            {option.hex && (
              <span className="attribute-swatch" style={{ backgroundColor: option.hex }} />
            )}
            {option.emoji && <span className="attribute-emoji">{option.emoji}</span>}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </fieldset>
  )
}

export default AttributePicker
