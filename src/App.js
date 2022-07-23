//Desenvolva um contador que tenha as seguintes funcionalidades:
//1 - O contador não pode chegar abaixo de 0
//2 - O contador não pode chegar acima de 10

import React, { Component } from "react";

class Counter extends Component {
  state = {count: 0};

  add = () => {
    if (this.state.count < 10){
      this.setState({
        count: this.state.count +1
      });
    }
  }

  remove = () => {
    if (this.state.count > 0){
      this.setState({
        count: this.state.count -1
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.add}>+1</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.remove}>-1</button>
      </div>
    );
  }
}

export default Counter;


