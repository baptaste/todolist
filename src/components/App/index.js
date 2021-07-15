/* eslint-disable react/prefer-stateless-function */
// == Import npm
import React, { Component } from 'react';

// == Import
import Form from 'src/components/Form';
import './app.scss';

// == Composant
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userValue: '',
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
      </div>
    );
  }
}

// == Export
export default App;
