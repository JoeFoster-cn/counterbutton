import React, { Component } from 'react';
import Button from './components/Button'
import './App.css';

class App extends Component {
  constructor(){ //do we need to use constructor?
    super();
    this.state={
      count:0 //count = 0 initially
    }
  }

  incrementCount= () => { //increment function
    this.setState({
      count:this.state.count+1
    })
  }

  decrementCount = () => { //decrement function
    this.setState({
      count:this.state.count-1
    })
  }

  render() {  //render to ui
    let { count } =this.state //count is equal to whatever this.state is, line 29 returns count variable 
    return (
      <div>
        <h2>{ count }</h2> 
        <Button
          title = { "Increment" }
          task = { () => this.incrementCount() }
        />
        <Button
          title = { "Decrement" }
          task = { () => this.decrementCount () }
        />
      </div>
    ); // button component called with title and task props from button.js
  }
}

// class App extends Component { //class component
//   render() { //renders the counter component returned in the ui
//     return (
//       <div className="App">
//         <Counter/>
//       </div>
//     );
//   }
// }

// class Counter extends Component { //counter component 
//   state = {
//     count: 0 //count variable set as 0
//   };
//   clickCount = () => { //clicking function
//     this.setState(({ count }) => ({ //set state to count + 1 each time clickCount is called
//       count: count + 1
//     }))
//   };
//   render() { //render this for the counter component
//     return <button onClick ={this.clickCount}>{this.state.count}</button>;
//   } //return button onClick to be clickCount funtion and returns the state containing count which is being incremented by clickCount
// }

export default App;