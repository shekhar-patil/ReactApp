import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: this.props.value
  };
  
  formatCount(){
    const { count } = this.state;
    return count === 0? "Zero" : count;
  };
  handleIncrement = () =>{
    this.setState({count: this.state.count + 1});
  }

  render() { 
    return (
      <div>
        <span className = { this.getBadgeClasses() }>{this.formatCount()}</span>
        <button 
          onClick={this.handleIncrement}
          className = "btn btn-secondary btn-sm"
          >
          Increament
        </button>
        <button 
          className = "btn btn-danger m-2" 
          onClick={() => this.props.onDelete(this.props.id)}   
          >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
 
export default Counter;
