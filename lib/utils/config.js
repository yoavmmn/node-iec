export const baseUrl = 'https://srvt2.i-ecnet.co.il:4451/ext/MobileCS';
export const endpoints = {
  login: `${baseUrl}/AuthenticationServices/ValidateUser`,
  register: `${baseUrl}/AuthenticationServices/CreateUser`,
  debtsHistory: `${baseUrl}/PersonalService/GetPaymentsHistory`
};
