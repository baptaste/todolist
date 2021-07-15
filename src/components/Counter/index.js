import React from 'react';
import './counter.scss';
import PropTypes from 'prop-types';

const Counter = ({ counter }) => (
  <p className="counter">{counter} tâche(s) en cours</p>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Counter;
