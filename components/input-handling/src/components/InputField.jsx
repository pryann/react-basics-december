import PropTypes from 'prop-types'
import '../assets/css/InputField.css'

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onUpdateValue: PropTypes.func.isRequired,
}

export default function InputField({ id, type, label, value, onUpdateValue }) {
  return (
    <div className='input-group'>
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onUpdateValue}
      />
    </div>
  )
}
