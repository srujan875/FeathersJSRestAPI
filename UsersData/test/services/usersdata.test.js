const app = require('../../src/app');

describe('\'usersdata\' service', () => {
  it('registered the service', () => {
    const service = app.service('usersdata');
    expect(service).toBeTruthy();
  });
});
