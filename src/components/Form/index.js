import React from 'react';
import './form.scss';

const Form = ({ inputValue, onFormChange, onFormSubmit }) => (
  <form className="form">
    <input
      type="text"
      className="form-item"
      placeholder="Ajouter une tâche"
      value={inputValue}
      onChange={onFormChange}
      onSubmit={onFormSubmit}
    />
  </form>
);

export default Form;
