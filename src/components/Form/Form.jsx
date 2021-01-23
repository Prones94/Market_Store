import React from 'react'
import './Form.styles.scss'

const Form = ({ handleChange, label, ...otherProps }) => (
    <div className="form">
      <input className="form__input" onChange={handleChange} {...otherProps}/>
      {label ? (
          <label
            className={`${
                otherProps.value.length ? 'shrink' : ' '
                } form__input_label`}>
        {label}
        </label>
        ) : null}
    </div>
  )

export default Form
