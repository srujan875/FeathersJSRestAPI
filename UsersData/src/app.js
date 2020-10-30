const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const mongoose = require('mongoose');
const service = require('feathers-mongoose');
const configuration = require('@feathersjs/configuration');



const Model = require('./models/usersdata.model');
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/demo');


const app = express(feathers()).configure(configuration());


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.configure(express.rest());
app.configure(socketio());
app.use('/usersdata', service({
  Model,
  lean: true, 
  paginate: {
    
    max: 4
  }
}));
app.use(express.errorHandler());

const port = 3030;
app.listen(port, () => {
    console.log(`Feathers server listening on port ${port}`);
});