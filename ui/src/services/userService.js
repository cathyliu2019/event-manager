import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL

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
  return axios.post(`http://${BACKEND_URL}:8000/graphql`, {
    query
  });
}
export default {
  fetchUers,
};