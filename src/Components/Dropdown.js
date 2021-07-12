import React from 'react'
import './Dropdown.css'

const Dropdown = () => {
  return (
    <div className="select-box">
      <label className="select" htmlFor="select">
        <select id="select" required="required">
          <option value="#">1 Persone</option>
          <option value="#">2 Persone</option>
          <option value="#">4 Persone</option>
          <option value="#">6 Persone</option>
          <option value="#">8 Persone</option>
          <option value="#">10 Persone</option>
        </select>
        <svg>
          <use href="#select-arrow-down"></use>
        </svg>
      </label>
      <svg className="sprites">
        <symbol id="select-arrow-down" viewBox="0 0 10 6">
          <polyline points="1 1 5 5 9 1"></polyline>
        </symbol>
      </svg>
    </div>
  )
}

export default Dropdown
