import '../assets/css/MainNavigation.css'

export default function MainNavigation(props) {
  return (
    <nav>
      <ul>
        <li>
          <a href={props.link}>{props.text}</a>
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
