"use strict";

var mongoose = require('mongoose'); // const db = require('../../app-modules/db');


var validateEmail = function validateEmail(email) {
  var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
  return re.test(email);
};

var schema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    validate: [validateEmail, 'Error: Invalid email address']
  },
  rss: {
    type: String,
    required: true
  }
});
var model = mongoose.model('user-data', schema, 'user');
module.exports = model;