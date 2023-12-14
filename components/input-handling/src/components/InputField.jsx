import PropTypes from 'prop-types'

InputField.propTypes = {
  onInput: PropTypes.func.isRequired,
}

export default function InputField({ onInput }) {
  return <input type='text' onChange={onInput} />
}
