import React, { Component } from 'react';

class Counter extends Component {
  
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0? "Zero" : value;
  };
  

  render() { 
    return (
      <div>
        <span className = { this.getBadgeClasses() }>{this.formatCount()}</span>
        <button 
          onClick={() => this.props.handleIncrement(this.props.counter)}
          className = "btn btn-secondary btn-sm"
          >
          Increament
        </button>
        <button 
          className = "btn btn-danger m-2" 
          onClick={() => this.props.onDelete(this.props.counter.id)}   
          >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
 
export default Counter;
