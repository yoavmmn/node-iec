import axios from 'axios';
import debtsController from './utils/debts';
import loginController from './utils/login';
import registerContoller from './utils/register';

class Client {
  constructor(params) {
    this._params = params;
    this._axios = null;

    this._createHeaders();
  }

  _createHeaders() {
    this._axios = axios.create({
      headers: {
        'Content-Type': 'text/xml',
        'Authorization': 'Basic YW5kbW9icDppZWNwQGFuZA=='
      }
    });
  }

  register() {
    return registerContoller(this._axios, this._params);
  }

  login() {
    return loginController(this._axios, this._params);
  }

  getDebtsHistory() {
    return debtsController(this._axios, this._params);
  }

  getAxios() {
    return this._axios;
  }
}

export default Client;
