/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './list.scss';
import PropTypes from 'prop-types';

const List = ({ tasks, onTaskStatusChange, deleteTask }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li key={task.id}>
        <label className={task.done ? 'list-item list-item--done' : 'list-item'}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onTaskStatusChange(task.id)}
          />
          {task.label}
          <button
            type="button"
            className="list-item--removeBtn"
            onClick={() => deleteTask(task.id)}
          >
            <i className="fas fa-trash-alt" />
          </button>
        </label>

      </li>
    ))}
  </ul>
);

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,

  ).isRequired,
  onTaskStatusChange: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default List;
