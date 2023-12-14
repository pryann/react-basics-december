import { useState } from 'react'
import './App.css'

function App() {
  const initialState = {
    firstName: '',
    lastName: '',
    emailAddress: '',
  }

  const [state, setState] = useState(initialState)
  const [showFormData, setShowFormData] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setShowFormData(true)
    setTimeout(() => {
      setShowFormData(false)
      setState(initialState)
    }, 5000)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} onReset={() => setState(initialState)}>
      <div className='form-group'>
        <label htmlFor='name'>First name:</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={state.firstName}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='name'>Last name:</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={state.lastName}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='emailAddress'
          name='emailAddress'
          value={state.emailAddress}
          onChange={handleChange}
          required={true}
        />
      </div>
      {showFormData && (
        <p>
          first name: {state.firstName} <br />
          last name: {state.lastName} <br />
          email address: {state.emailAddress}
        </p>
      )}
      <div className='form-group'>
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </div>
    </form>
  )
}

export default App
