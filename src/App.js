import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/navBar';
import Counters from '../src/components/counters';

class App extends Component {
  state = { 
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0},
    ]
  };
  
  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    console.log(counters)
    this.setState({
      counters: counters
    })
  }
  handleIncrement = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }
  handleReset= () =>{
    const counters = this.state.counters.map(counter => 
      {
        counter.value = 0;
        return counter;
      });
    this.setState({counters});
  }

  render() {
    return (
      <div>
        <NavBar
        totalCount = { this.state.counters.filter(c => c.value > 0).length }/>
        <Counters
          counters = {this.state.counters}
          handleDelete = {this.handleDelete}
          handleIncrement = {this.handleIncrement}
          handleReset = {this.handleReset}
        />

      </div>
    );
  }
}

export default App;
