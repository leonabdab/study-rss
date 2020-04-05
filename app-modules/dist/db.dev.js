"use strict";

var mongoose = require('mongoose');

var DB_NAME = 'user';
var DB_URL = process.env.DB_KEY || "mongodb://localhost:27017/".concat(DB_NAME);
var DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
var state = {
  db: null
};
mongoose.set('useFindAndModify', false);

var connect = function connect() {
  if (!state.connected) {
    mongoose.connect(DB_URL, DB_OPTIONS).then(function (result) {
      state.db = result;
      console.log("Successfully connected to: ".concat(DB_URL));
    })["catch"](function (error) {
      return console.log('DB connection failed: ', error.message);
    });
  }
};

var db = function db() {
  return state.db;
};

var primaryKey = function primaryKey(_id) {
  return mongoose.Types.ObjectId(_id);
};

module.exports = {
  connect: connect,
  db: db,
  primaryKey: primaryKey
};