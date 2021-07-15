import React from 'react';
import './list.scss';
import PropTypes from 'prop-types';

const List = ({ lists }) => (
  <ul className="list">
    {lists.map((list) => (
      <li key={list.id}>
        <label className={list.done ? 'list-item list-item--done' : 'list-item'}>
          {list.done ? <input type="checkbox" checked /> : <input type="checkbox" />}
          {list.label}
        </label>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default List;
