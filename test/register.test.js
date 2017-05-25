import axios from 'axios';
import moxios from 'moxios';
import Client from '../lib/index';
import { endpoints } from '../lib/utils/config';
import registerContoller from '../lib/utils/register';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

test('should fail registering user', (done) => {
  moxios.stubRequest(endpoints.register, {
    status: 500
  });

  registerContoller(axios.create({
      headers: {
        'Content-Type': 'text/xml',
        'Authorization': 'Basic YW5kbW9icDppZWNwQGFuZA=='
      }
    }), {
    fullName: null,
    contractNum: 'xxx',
    meterNum: 'xxx',
    phonePrefix: '123',
    phone: '123456',
    email: 'test@test.com',
    password: '123456',
    id: '396102385'
  }).catch(done);
});

test('should register user if details are correct', (done) => {
  moxios.stubRequest(endpoints.register, {
    status: 200,
    response: {
      "CreateUserResponse": {
        "CreateUserResult": {
          "Rc": "OK"
        }
      }
    }
  });

  registerContoller(axios.create({
      headers: {
        'Content-Type': 'text/xml',
        'Authorization': 'Basic YW5kbW9icDppZWNwQGFuZA=='
      }
    }), {
    fullName: 'John Doe',
    contractNum: '12345',
    meterNum: '12345',
    phonePrefix: '050',
    phone: '2486825',
    email: 'test@test.com',
    password: '123456',
    id: '208134236'
  }).then(done);
});
