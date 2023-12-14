import { useState } from 'react'

import './App.css'
import InputField from './components/InputField'

function App() {
  function handleInput() {
    console.log('Input focused')
  }
  return (
    <div>
      <InputField onInput={handleInput} />
    </div>
  )
}

export default App
