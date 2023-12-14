import '../assets/css/MainNavigation.css'
import PropTypes from 'prop-types'

MainNavigation.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  version: PropTypes.number.isRequired,
}

export default function MainNavigation({ text, link, version }) {
  return (
    <nav>
      <ul>
        <li>
          <a href={link}>
            {text} {version}
          </a>
        </li>
        <li>
          <a href='https://training360.com'>Training360</a>
        </li>
        <li>
          <a href='https://reactjs.org'>React.js</a>
        </li>
      </ul>
    </nav>
  )
}
