import { endpoints } from './config';

const registerContoller = function registerContoller(axios, payload) {
  const {
    id,
    phone,
    email,
    meterNum,
    password,
    fullName,
    phonePrefix,
    contractNum
  } = payload;

  const data = `<args>\r
  <arg name=\"contractNum\">${contractNum}</arg>\r
  <arg name=\"meterNum\">${meterNum}</arg>\r
  <arg name=\"fullName\">${fullName}</arg>\r
  <arg name=\"phonePrefix\">${phonePrefix}</arg>\r
  <arg name=\"phone\">${phone}</arg>\r
  <arg name=\"email\">${email}</arg>\r
  <arg name=\"password\">${password}</arg>\r
  <arg name=\"id\">${id}</arg>\r
</args>`;

  return axios.post(endpoints.register, data).then((response) => {
    return response.data;
  });
};

export default registerContoller;
