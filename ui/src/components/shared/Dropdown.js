import React, { Component } from 'react';
import Users from '../users/Users';

class Dropdown extends Component {

  constructor() {
    super();
  };



  render() {
    return (
      <select class="browser-default" onChange={this.props.onClickUser}>
        <option disabled selected >{this.props.title}</option>
        <Users users={this.props.users} /> 
      </select>
    );
  }
}

export default Dropdown;