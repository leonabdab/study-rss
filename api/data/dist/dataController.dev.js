"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DbSchema = require('../schema');

var propsExcluded = {
  _id: 0,
  __v: 0
};

var get = function get(req, res) {
  var query, response;
  return regeneratorRuntime.async(function get$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          query = req.query;

          if (!(JSON.stringify(query) === '{}')) {
            _context.next = 10;
            break;
          }

          _context.t0 = res;
          _context.next = 6;
          return regeneratorRuntime.awrap(DbSchema.find({}).select(propsExcluded));

        case 6:
          _context.t1 = _context.sent;
          return _context.abrupt("return", _context.t0.json.call(_context.t0, _context.t1));

        case 10:
          if (!query) {
            _context.next = 16;
            break;
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(DbSchema.find(query).select(_objectSpread({}, propsExcluded)));

        case 13:
          response = _context.sent;

          if (JSON.stringify(response) === '[]') {
            res.status('404').send('Error: resource not found');
          }

          return _context.abrupt("return", res.json(response));

        case 16:
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t2 = _context["catch"](0);
          console.error('DataGetError: ', _context.t2.message);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

var getAll = function getAll(req, res) {
  var query, response;
  return regeneratorRuntime.async(function getAll$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          query = req.query;
          _context2.next = 4;
          return regeneratorRuntime.awrap(DbSchema.find(query));

        case 4:
          response = _context2.sent;

          if (JSON.stringify(response) === '[]') {
            res.status('404').send('Error: resource not found');
          }

          return _context2.abrupt("return", res.json(response));

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error('DataGetError: ', _context2.t0.message);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var post = function post(req, res, next) {
  var _req$body, email, rss, data, response;

  return regeneratorRuntime.async(function post$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, email = _req$body.email, rss = _req$body.rss;

          if (!(email && rss)) {
            _context3.next = 8;
            break;
          }

          data = new DbSchema({
            email: email,
            rss: rss
          });
          _context3.next = 6;
          return regeneratorRuntime.awrap(data.save());

        case 6:
          response = _context3.sent;
          res.json(response);

        case 8:
          next();
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error('DataPostError', _context3.t0.message);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports = {
  get: get,
  getAll: getAll,
  post: post
};