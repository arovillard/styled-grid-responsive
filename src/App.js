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
          <h1 className="App-title">Styled-Grid-Responsie Demo</h1>
        </header>
        <Grid gutter={50}>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 1</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 2</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 3</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 4</p>
          </GridItem>
        </Grid>
        <Grid full rev>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 1</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 2</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 3</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 4</p>
          </GridItem>
        </Grid>
        <Grid middle center>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 1</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <h1>Item 2</h1>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 3</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 4</p>
          </GridItem>
        </Grid>
        <Grid bottom>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 1</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <h1>Item 2</h1>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 3</p>
          </GridItem>
          <GridItem media={{ phone: 1, tablet: 1 / 2 }} col={1 / 4}>
            <p>Item 4</p>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

export default App;
