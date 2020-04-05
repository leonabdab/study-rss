"use strict";

var mongoose = require('mongoose');

var EmailModel = require('./emailSchema');

console.log(EmailModel);

var postEmail = function postEmail(req, res, next) {
  var reqBody, email, result;
  return regeneratorRuntime.async(function postEmail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          reqBody = function reqBody() {
            return regeneratorRuntime.async(function reqBody$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(req.body);

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          console.log(reqBody);

          if (!reqBody) {
            _context2.next = 11;
            break;
          }

          email = new EmailModel({
            email: reqBody
          });
          console.log(email);
          _context2.next = 8;
          return regeneratorRuntime.awrap(email.save());

        case 8:
          result = _context2.sent;
          console.log(result);
          next();

        case 11:
          _context2.next = 16;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.log('PostEmail: ', _context2.t0.message);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
};