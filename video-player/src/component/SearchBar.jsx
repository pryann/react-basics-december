import { useState } from 'react'
import PropTypes from 'prop-types'

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}

export default function SearchBar({ onFormSubmit }) {
  const [queryString, setQueryString] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onFormSubmit(queryString)
  }

  return (
    <form className="form my-3" onSubmit={handleSubmit}>
      <div className="form-group d-flex justify-content-center">
        <input
          type="text"
          id="search"
          name="search"
          value={queryString}
          onChange={(e) => setQueryString(e.target.value)}
          className="form-control form-control-lg w-50"
          placeholder="Search video"
        />
        <button className="btn btn-light">Search</button>
      </div>
    </form>
  )
}
