import { endpoints } from './config';

const loginController = function loginController(axios, payload) {
  const {
    email,
    password
  } = payload;

  const data = `<args>\r
  <arg name=\"username\">${email}</arg>\r
  <arg name=\"password\">${password}</arg>\r
</args>`;

  return axios.post(endpoints.login, data).then(response => response.data);
};

export default loginController;
