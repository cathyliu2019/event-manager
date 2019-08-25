import React, { Component } from 'react';
import Dropdown from './shared/Dropdown';
import EventManager from './events/EventManager';
import userService from '../services/userService';


class Home extends Component {

  async componentDidMount() {
    const res = await userService.fetchUers();
    this.setState({
      users: res.data.data.users,
      isUserAvailable: true,
    });
  }

  state = {
    isUserSelected: false,
    isUserAvailable: false,
  }

  onClickUser = (event) => {
    const id = event.target.value;
    const user = this.state.users.filter(user => {
      return user.id === id;
    })[0];
    this.setState({
      user: user
    })
    this.setState({ isUserSelected: true });
  }

  render() {
    return (
      <div className="event-manager container">
        <h1 className="center blue-text">Event Manager!</h1>
        {this.state.isUserAvailable ? (
          <Dropdown users={this.state.users} onClickUser={this.onClickUser} title={'Select user'} />
        ) : (
            null
          )}
        {this.state.isUserSelected ? (
          <EventManager user={this.state.user} />
        ) : (
            null
          )}
      </div>
    )
  }
}

export default Home;
