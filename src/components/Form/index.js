import React from 'react';
import './form.scss';
import PropTypes from 'prop-types';

const Form = ({ taskInputValue, onTaskInputChange, onTaskSubmit }) => (
  <form
    className="form"
    onSubmit={onTaskSubmit}
  >
    <input
      type="text"
      className="form-item"
      placeholder="Ajouter une tâche"
      value={taskInputValue}
      onChange={onTaskInputChange}
    />
  </form>
);

Form.propTypes = {
  taskInputValue: PropTypes.string.isRequired,
  onTaskInputChange: PropTypes.func.isRequired,
  onTaskSubmit: PropTypes.func.isRequired,
};

export default Form;
