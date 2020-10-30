const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UsersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  role:{
    type: String,
    required: true
  },
  company:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  }
});
const Model = mongoose.model('users', UsersSchema);

module.exports = Model;