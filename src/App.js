import React, { Component } from 'react';
import './App.css';

class App extends Component { //class component
  render() { //renders the counter component returned in the ui
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}

class Counter extends Component { //counter component 
  state = {
    count: 0 //count variable set as 0
  };
  clickCount = () => { //clicking function
    this.setState(({ count }) => ({ //set state to count + 1 each time clickCount is called
      count: count + 1
    }))
  };
  render() { //render this for the counter component
    return <button onClick ={this.clickCount}>{this.state.count}</button>;
  } //return button onClick to be clickCount funtion and returns the state containing count which is being incremented by clickCount
}

export default App;