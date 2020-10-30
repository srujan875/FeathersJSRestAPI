const usersdata = require('./usersdata/usersdata.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(usersdata);
};
