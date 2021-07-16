import React from 'react';
import './counter.scss';
import PropTypes from 'prop-types';

const Counter = ({ nbTasks }) => (
  <p className="counter">{nbTasks} tâche(s) en cours</p>
);

Counter.propTypes = {
  nbTasks: PropTypes.number.isRequired,
};

export default Counter;
