import React, { Component } from 'react';
import AddEvent from './AddEvent';
import Events from './Events';
import eventService from '../../services/eventService';

const ORGANIZER_ROLE = 0

class EventManager extends Component {

  constructor() {
    super();
    // Assign state itself, and a default value for items
    this.state = {
      events: [],
    }
  }

  async componentDidMount() {
    await this.fetchEvents();
  }

  fetchEvents = async () => {
    const res = await eventService.fetchEvents();
    this.setState({
      events: res.data.data.events,
      isEventAvailable: true,
    });
  }

  addEvent = async (event) => {
    await eventService.createEvent(event, this.props.user.id);
    await this.fetchEvents();
  }

  deleteEvent = async (id) => {
    await eventService.deleteEvent(id);
    await this.fetchEvents();
  }

  enrollEvent = async (userId, eventId) => {
    await eventService.enrollEvent(userId, eventId);
    await this.fetchEvents();
  }

  render() {
    return this.props.user.privilegeLevel === ORGANIZER_ROLE ? (
      <div className="event-manager container">
        <React.Fragment>
        {this.state.isEventAvailable ? (
          <Events enrollEvent={this.enrollEvent} deleteEvent={this.deleteEvent}
            events={this.state.events} user={this.props.user} />
        ) : (
          null
        )}
          <AddEvent addEvent={this.addEvent} />
        </React.Fragment>
      </div>
    ) : (
        <div className="event-manager container">
        {this.state.isEventAvailable ? (
          <Events enrollEvent={this.enrollEvent} deleteEvent={this.deleteEvent}
            events={this.state.events} user={this.props.user} />
        ) : (
          null
        )}
        </div>
      )
  }

}

export default EventManager;
