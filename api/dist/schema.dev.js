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
    validate: [validateEmail, 'Error: Invalid email address']
  },
  rss: {
    type: String // match: /^http.*/i

  }
});
var model = mongoose.model('user-data', schema, 'data');
module.exports = model;