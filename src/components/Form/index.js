import React from 'react';
import './form.scss';
import PropTypes from 'prop-types';

const Form = ({ inputValue, onFormChange, onFormSubmit }) => (
  <form className="form" onSubmit={onFormSubmit}>
    <input
      type="text"
      className="form-item"
      placeholder="Ajouter une tâche"
      value={inputValue}
      onChange={onFormChange}

    />
  </form>
);

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onFormChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
