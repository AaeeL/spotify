import axios from 'axios';

const baseURL = 'http://localhost:5000/api/spotify';

const getUserData = token => {
  const request = axios.post(`${baseURL}/user_data`, { access_token: token });
  return request.then(response => response.data);
};

export default { getUserData };
