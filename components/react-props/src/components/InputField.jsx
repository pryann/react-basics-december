import PropTypes from 'prop-types'

InputField.propTypes = {
  onFocus: PropTypes.func.isRequired,
}

export default function InputField({ onFocus }) {
  return <input type='text' onClick={onFocus} />
}
