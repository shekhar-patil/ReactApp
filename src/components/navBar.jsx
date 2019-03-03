import React, { Component } from 'react';
class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav className="navbar navbar-light bg-light">
        <div>NavBar <span className="badge m-2 badge-primary">{this.props.totalCount}</span ></div>
      </nav> 
    );
  }
}
 
export default NavBar;
