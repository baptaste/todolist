import React from 'react';
import './list.scss';
import PropTypes from 'prop-types';

const List = ({ lists }) => (
  <ul className="list">
    {lists.map((list) => (
      <li key={list.id}>
        <label className={list.done ? 'list-item list-item--done' : 'list-item'}>
          <input type="checkbox" checked />
          {list.label}
        </label>
      </li>
    ))}
  </ul>
);

export default List;
