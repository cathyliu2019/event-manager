import React from 'react';

const Enrollments = ({ events, deleteEvent }) => {

    const enrollmentlist = events.length ? (
        events.map(event => {
            return (
                <div className="collection-item" key={event.id}>
                    <span>Name: {event.eventName}</span>
                    <span>EventInfo: {event.eventInfo}</span>
                    <span>Date: {event.date}</span>
                    <button onClick={() => { deleteEvent(event.id) }}>Delete event</button>
                </div>
            );

        })
    ) : (
            <p>You have no events left.</p>
        )
    return (
        <div className="enrollments collection">
            {enrollmentlist}
        </div>
    )
}

export default Enrollments