/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
import './todolist.scss';

import tasksData from 'src/data/tasks';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskInputValue: '',
      tasks: tasksData,
    };

    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleTaskStatusToggle = this.handleTaskStatusToggle.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleTaskInputChange(event) {
    this.setState({
      taskInputValue: event.target.value,
    });
  }

  handleTaskSubmit(event) {
    event.preventDefault();

    const ids = this.state.tasks.map((task) => task.id);
    const maxId = Math.max(...ids);
    const newId = maxId + 1;
    const newTask = {
      id: newId,
      label: this.state.taskInputValue,
      done: false,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
      taskInputValue: '',
    });
  }

  handleTaskStatusToggle(taskId) {
    const modifiedTasks = this.state.tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });

    this.setState({
      tasks: modifiedTasks,
    });
  }

  handleDeleteTask(taskId) {
    const newTasks = this.state.tasks.filter((task) => task.id !== taskId);

    this.setState({
      tasks: newTasks,
    });
  }

  getOngoingTasksNumber() {
    return this.state.tasks.filter((task) => !task.done).length;
  }

  getFilteredTasks() {
    const ongoingTasks = this.state.tasks.filter((task) => !task.done);
    const completedTasks = this.state.tasks.filter((task) => task.done);

    return [
      ...ongoingTasks,
      ...completedTasks,
    ];
  }

  render() {
    return (
      <div className="app">
        <Form
          taskInputValue={this.state.taskInputValue}
          onTaskInputChange={this.handleTaskInputChange}
          onTaskSubmit={this.handleTaskSubmit}
        />
        <Counter nbTasks={this.getOngoingTasksNumber()} />
        <List
          tasks={this.getFilteredTasks()}
          onTaskStatusChange={this.handleTaskStatusToggle}
          deleteTask={this.handleDeleteTask}
        />
      </div>
    );
  }
}

export default TodoList;
