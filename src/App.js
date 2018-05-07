import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, GridItem } from './GridComp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid rev>
          <GridItem col={1/2}>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </GridItem>
          <GridItem col={1/2}>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

export default App;
