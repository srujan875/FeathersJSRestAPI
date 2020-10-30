// Initializes the `usersdata` service on path `/usersdata`
const { Usersdata } = require('./usersdata.class');
const createModel = require('../../models/usersdata.model');
const hooks = require('./usersdata.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/usersdata', new Usersdata(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('usersdata');

  service.hooks(hooks);
};
