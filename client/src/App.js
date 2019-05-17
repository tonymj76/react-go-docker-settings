import React, { Component } from 'react';
import Users from './component/Users';
import CreateUser from "./component/CreateUser";
import logo from './logo.svg';
import './compiled/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Awesome tony</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Users/>
        <CreateUser/>
        
      </div>
    );
  }
}

export default App;
