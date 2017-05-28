import axios from 'axios';
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

  getAxios() {
    return this._axios;
  }
}

export default Client;
