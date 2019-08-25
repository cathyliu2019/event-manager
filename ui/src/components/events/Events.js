import React from 'react';
import Dropdown from '../shared/Dropdown';

const Events = ({ events, deleteEvent, enrollEvent, user }) => {
  const eventList = events.length ? (
    events.map(event => {
      const users = event.enrollments.map(enrollment => enrollment.user);
      return (
        <tr>
          <td>{event.eventName}</td>
          <td>{event.category}</td>
          <td>{event.eventDate}</td>
          <td>{event.eventInfo}</td>
          <td>{event.cost}</td>
          <td> {user.privilegeLevel === 0 ? (
            <React.Fragment>
              <a class="waves-effect waves-light btn"onClick={() => { deleteEvent(event.id) }}>Delete event</a>
              <br/>
              <Dropdown users={users} title={'Join List'} onClickUser={() => { }} />
            </React.Fragment>
          ) : users.map(eventUser => eventUser.id).includes(user.id) ? 
           (<a class="waves-effect waves-light btn" href="#">Joined</a>) : (
            <a class="waves-effect waves-light btn" onClick={() => { enrollEvent(user.id, event.id) }}>Join</a>
          )}</td>

        </tr>


      );

    })
  ) : (
      <p class="red-text">You have no events left.</p>
    )
  return (

    <div>
      <table className="responsive-table">
        <thead>
          <th>Name</th>
          <th>Category</th>
          <th>Date</th>
          <th>EventInfo</th>
          <th>Cost</th>
          <th>Action</th>
        </thead>
        <tbody>
          {eventList}
        </tbody>
      </table>
    </div>
  )
}

export default Events

