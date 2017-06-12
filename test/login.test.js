import axios from 'axios';
import moxios from 'moxios';
// import Client from '../lib/index';
import { endpoints } from '../lib/utils/config';
import loginController from '../lib/utils/login';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('should fail loging in', (done) => {
  moxios.stubRequest(endpoints.login, {
    status: 500
  });

  loginController(axios.create({
    headers: {
      'Content-Type': 'text/xml',
      Authorization: 'Basic YW5kbW9icDppZWNwQGFuZA=='
    }
  }), {
    email: 'test.com', // not an email
    password: '123456',
  }).catch(done);
});

test('should login if details are correct', (done) => {
  moxios.stubRequest(endpoints.login, {
    status: 200,
    response: {
      CreateUserResponse: {
        CreateUserResult: {
          Rc: 'OK'
        }
      }
    }
  });

  loginController(axios.create({
    headers: {
      'Content-Type': 'text/xml',
      Authorization: 'Basic YW5kbW9icDppZWNwQGFuZA=='
    }
  }), {
    email: 'test@test.com',
    password: '123456',
  }).then(done);
});
