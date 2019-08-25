import axios from 'axios';

async function fetchUers() {
  const query = `{
    users {
      id
      userName
      phone
      email
      privilegeLevel
    }
  }`;
  return axios.post(`http://localhost:8000/graphql`, {
    query
  });
}
export default {
  fetchUers,
};
