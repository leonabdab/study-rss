"use strict";

var UserModel = require('./userSchema');

var get = function get(req, res) {
  var email;
  return regeneratorRuntime.async(function get$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.params);
          email = req.params.email;
          _context.prev = 2;

          if (email) {}

          _context.t0 = res;
          _context.next = 7;
          return regeneratorRuntime.awrap(UserModel.find({
            email: email
          }));

        case 7:
          _context.t1 = _context.sent;
          return _context.abrupt("return", _context.t0.json.call(_context.t0, _context.t1));

        case 11:
          _context.prev = 11;
          _context.t2 = _context["catch"](2);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 11]]);
};