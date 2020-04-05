"use strict";

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  rss: {
    type: String,
    required: true
  }
});
var userModel = mongoose.model('User', userSchema, 'user');
module.exports = userModel;