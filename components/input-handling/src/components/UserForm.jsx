import { useState } from 'react'
import InputField from './InputField'

export default function UserForm() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
  }

  const [formData, setFormData] = useState(initialState)

  function updateValue(e) {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(JSON.stringify(formData))
    setFormData(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="firstName"
        label="First name"
        type="text"
        value={formData.firstName}
        onUpdateValue={updateValue}
      />
      <InputField
        id="lastName"
        label="Last name"
        type="text"
        value={formData.lastName}
        onUpdateValue={updateValue}
      />
      <InputField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onUpdateValue={updateValue}
      />
      <button>Submit</button>
    </form>
  )
}
