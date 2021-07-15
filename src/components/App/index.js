/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React, { Component } from 'react';

// == Import
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
import './app.scss';

import tasksData from 'src/data/tasks';

// == Composant
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userValue: '',
      baseCounter: 2,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(e) {
    this.setState({
      userValue: e.target.value,
    });
  }

  render() {
    return (
      <div className="app">
        <Form inputValue={this.state.userValue} onFormChange={this.handleFormChange} />
        <Counter baseCounter={this.state.baseCounter} />
        <List lists={tasksData} />
      </div>
    );
  }
}

// == Export
export default App;
