import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import StateComponent from './State';
import Counter from './Counter';
import FilteredList from './FilteredList';

const appStyle = {
  textAlign: 'center'
}
const buffer = {
  height: '200px'
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 style={appStyle}>Welcome to my React App!</h1>
        </div>
        <hr />
        <HelloWorld name="Colin" />
        <hr />
        <StateComponent />
        <hr />
        <Counter />
        <hr />
        <FilteredList />
        <div style={buffer}/>
      </div>
    );
  }
}

export default App;