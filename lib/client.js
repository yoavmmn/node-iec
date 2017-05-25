import axios from 'axios';
import registerContoller from './utils/register';

class Client {
  constructor(params) {
    this._params = params;
    this._axios = this._createHeaders();
  }

  _createHeaders() {
    return axios.create({
      headers: {
        'Content-Type': 'text/xml',
        'Authorization': 'Basic YW5kbW9icDppZWNwQGFuZA=='
      }
    });
  }

  register() {
    return registerContoller(this._axios, this._params);
  }
}

export default Client;
