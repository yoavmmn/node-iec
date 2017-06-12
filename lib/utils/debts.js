import { endpoints } from './config';

const debtsController = function debtsController(axios, payload) {
  const { contractNum } = payload;

  const data = `<args>\r
  <arg name=\"contractNum\">${contractNum}</arg>
</args>`;

  return axios.post(endpoints.debtsHistory, data).then(response => response.data);
};

export default debtsController;
