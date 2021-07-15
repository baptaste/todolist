/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React, { Component } from 'react';

// == Import
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
import './app.scss';

import tasksData from 'src/data/tasks';
import tasks from '../../data/tasks';

// == Composant
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userValue: '',
      tasks: tasksData,
      isDone: false,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.setBaseCounter = this.setBaseCounter.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange(e) {
    this.setState({
      userValue: e.target.value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.push(
        {
          id: 2,
          label: this.state.userValue,
          done: false,
        },
      ),
    });
    console.log(this.state.tasks);
  }

  setBaseCounter() {
    const taskDone = this.state.tasks.filter((task) => task.done === !this.state.isDone);
    const totalTasksDone = taskDone.length;
    return totalTasksDone;
  }

  render() {
    return (
      <div className="app">
        <Form
          inputValue={this.state.userValue}
          onFormChange={this.handleFormChange}
          onFormSubmit={this.handleFormSubmit}
        />
        <Counter counter={this.setBaseCounter()} />
        <List lists={tasksData} />
      </div>
    );
  }
}

// == Export
export default App;
