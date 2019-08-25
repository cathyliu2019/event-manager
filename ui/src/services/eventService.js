import axios from 'axios';

async function fetchEvents() {
  const query = `{
    events {
      id
      eventName
      category
      eventInfo
      eventDate
      cost
      enrollments {
        user {
          id
          email
        }
      }
    }
  }`;
  return axios.post(`http://localhost:8000/graphql`, {
    query
  });
}

async function createEvent(event, userId) {
  const query = `mutation CreateEvent($event: EventInput!, $userId: String!) {
    addEvent(event: $event, userId: $userId) {
      id
    }
  }`;
  const variables = {
    event: {
      eventName: event.eventName,
      category: event.category,
      eventInfo: event.eventInfo,
      eventDate: event.eventDate,
      cost: Number(event.cost),
    },
    userId: userId
  }
  return axios.post(`http://localhost:8000/graphql`, {
    query,
    variables
  });
}
async function deleteEvent(eventId) {

  const query = `mutation DeleteEnrollment($eventId: String!){
  deleteEvent(eventId: $eventId)
}`;

  return axios.post(`http://localhost:8000/graphql`, {
    query,
    variables: {
      eventId: eventId,
    }
  });
}
async function enrollEvent(userId, eventId) {

  const query = `mutation CreateEnrollment($enrollment: EnrollmentInput!) {
    enroll(enrollment: $enrollment) {
      id
    }
  }`;

  return axios.post(`http://localhost:8000/graphql`, {
    query,
    variables: {
      enrollment:{
        userId,
        eventId,
      }
    }
  });
}


export default {
  fetchEvents,
  createEvent,
  deleteEvent,
  enrollEvent,
}
