import React from 'react';

import './form-input.scss';

const FormInput = ({ handleChange, label, labelFor, ...otherProps }) => (
  <div>
    {
      label ? <label htmlFor={ labelFor }>{ label }</label> : null
    }
    <input onChange={ handleChange } { ...otherProps }/>
  </div>
);

export default FormInput;