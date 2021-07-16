/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React, { Component } from 'react';

// == Import
import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import List from 'src/components/List';
import './todolist.scss';

import tasksData from 'src/data/tasks';

// == Composant
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
    // algo pour générer un ID unique a chaque nouvelle task
    // on fait un map sur tasks pour récup un tableau d'id uniquement, qu'on stocke dans 'ids'
    const ids = this.state.tasks.map((task) => task.id);
    // on récupère le max grace au spread qui déverse le contenu du tableau 'ids'
    const maxId = Math.max(...ids);
    // on déclare un newId et on lui associe la valeur max + 1 pour etre tjrs le plus grand
    const newId = maxId + 1;
    // on déclare un nouvel obj (notre nouvelle tache)
    const newTask = {
      id: newId,
      label: this.state.taskInputValue,
      done: false,
    };
    // la magie du spread operator opère
    // on clone bel et bien le tableau de tasks avec notre nouvel obj dedans
    this.setState({
      tasks: [...this.state.tasks, newTask],
      // on remet l'input a vide
      taskInputValue: '',
    });
  }

  handleTaskStatusToggle(taskId) {
    // objectif
    // trouver la tache qui a l'id donné (taskId)
    // dans le tableau
    // changer son boolen done a l'inverse de ce qu'il est
    // si false --> true, si true --> false
    // attention : on n'oublie pas l'immutabilité
    // on n'a pas droit de modifier l'ancien state

    const modifiedTasks = this.state.tasks.map((task) => {
      // on regarde si la tâche en cours correspond à l'id donné a la fonction
      if (task.id === taskId) {
        // alors je vais renvoyer la tache modifiée...
        // je renvoie un nouvel objet par souci d'immutabilité
        return {
          // je déverse les propriétés de la tache
          // dans mon nouvel objet
          ...task,
          // j'inverse le booléen done
          done: !task.done,
        };
      }
      // sinon, je vais renvoyer la tache telle qu'elle, sans y toucher.
      return task;
    });

    // note : en one liner, on pourrait faire :
    // return task.id === taskId ? { ...task, done: !task.done } : task;

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

// == Export
export default TodoList;
