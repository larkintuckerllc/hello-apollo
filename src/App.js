import React, { Component } from 'react';
import Counter from './components/Counter';
import Decrement from './components/Decrement';
import Increment from './components/Increment';
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
      </div>
    );
  }
}

export default App;
