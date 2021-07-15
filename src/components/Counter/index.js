import React from 'react';
import './counter.scss';
import PropTypes from 'prop-types';

const Counter = ({ baseCounter }) => (
  <p className="counter">{baseCounter} tâche(s) en cours</p>
);

Counter.propTypes = {
  baseCounter: PropTypes.number.isRequired,
};

export default Counter;
