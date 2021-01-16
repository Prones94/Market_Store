import React from 'react'
import './Form.styles.scss'

const Form = ({ handleChange, label, ...otherProps }) => (
    <div className="form">
      <input type="text" className="form__input" onChange={handleChange} />
      {
        label ?
        (<label className={`${otherProps.value.length ? 'shrink' : ''}form__input_label`}>
        {label}
        </label>)
        : null
      }
    </div>
  )



export default Form
