// 3th party modules, own modules, css and other non jsx files
import PropTypes from 'prop-types'
import '../assets/css/SiteContent.css'
import InputField from './InputField'

SiteContent.propTypes = {
  counter: PropTypes.number.isRequired,
}

export default function SiteContent({ counter }) {
  function handleFocus() {
    console.log('Input fouced')
  }

  return (
    <main>
      <p>Counter: {counter}</p>
      <InputField onFocus={handleFocus} />
    </main>
  )
}
