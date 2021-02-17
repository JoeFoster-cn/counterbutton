import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    number : 0
  }
  increaseNum = (event) => {
    // let number = parseInt(event.target.number)
    this.setState({ number: this.state.number + 1})
  };

  render() {
    return (
        <div className="App">
          <button onClick={this.increaseNum}></button>
        </div>
      );
  } 
}

export default App;
