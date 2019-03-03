import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
  render() { 
    return ( 
      <div>
        <button 
          className="btn btn-primary"
          onClick={this.props.handleReset}
          >Reset
        </button>
        {this.props.counters.map(counter => 
          <Counter 
          key={counter.id}
          counter = {counter}
          onDelete={this.props.handleDelete}
          handleIncrement={this.props.handleIncrement}
          />)}
      </div>
     );
  }
}
 
export default Counters;
