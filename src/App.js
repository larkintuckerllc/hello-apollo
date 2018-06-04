import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import Counter from './components/Counter';
import Decrement from './components/Decrement';
import Increment from './components/Increment';
import Todos from './components/Todos';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <Decrement />
        <Increment />
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
