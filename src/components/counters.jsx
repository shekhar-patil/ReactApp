import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = { 
    counters: [
      {id: 1, value: 4},
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
    console.log(counters)
    this.setState({counters});
  }

  render() { 
    return ( 
      <div>
        <button 
          className="btn btn-primary"
          onClick={this.handleReset}
          >Reset
        </button>
        {this.state.counters.map(counter => 
          <Counter 
          key={counter.id}
          counter = {counter}
          onDelete={this.handleDelete}
          handleIncrement={this.handleIncrement}
          />)}
      </div>
     );
  }
}
 
export default Counters;
