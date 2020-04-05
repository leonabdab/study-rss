"use strict";

var DbSchema = require('../schema');

var post = function post(req, res, next) {
  var reqBody, email, response;
  return regeneratorRuntime.async(function post$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(req.body);

        case 3:
          reqBody = _context.sent;

          if (!reqBody) {
            _context.next = 10;
            break;
          }

          email = new DbSchema({
            email: reqBody.email
          });
          _context.next = 8;
          return regeneratorRuntime.awrap(email.save());

        case 8:
          response = _context.sent;
          res.json(response);

        case 10:
          next();
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.error('PostEmail: ', _context.t0.message);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

var get = function get(req, res) {
  return regeneratorRuntime.async(function get$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.t0 = res;
          _context2.next = 4;
          return regeneratorRuntime.awrap(DbSchema.find().select({
            rss: 0,
            _id: 0,
            __v: 0
          }));

        case 4:
          _context2.t1 = _context2.sent;
          return _context2.abrupt("return", _context2.t0.json.call(_context2.t0, _context2.t1));

        case 8:
          _context2.prev = 8;
          _context2.t2 = _context2["catch"](0);
          console.error('GetEmail: ', _context2.t2.message);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = {
  post: post,
  get: get
};