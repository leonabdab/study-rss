"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEmailReadOnly = exports.postEmail = exports.getEmail = void 0;
var email = $('#email');
var contentType = "application/json; charset=utf-8";

var getEmail = function getEmail() {
  var fetchOptions, response, data;
  return regeneratorRuntime.async(function getEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          fetchOptions = {
            method: 'get'
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('/email', fetchOptions));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Unexpected error: ".concat(_context.t0.message, ". Please try again"));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.getEmail = getEmail;

var postEmail = function postEmail() {
  var fetchOptions, response, data;
  return regeneratorRuntime.async(function postEmail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          fetchOptions = {
            method: 'post',
            body: JSON.stringify({
              email: email.val()
            }),
            headers: {
              "Content-Type": contentType
            }
          };
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch('/email', fetchOptions));

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context2.sent;

          if (data.error) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", data);

        case 10:
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error("Unexpected error: ".concat(_context2.t0.message, ". Please try again"));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

exports.postEmail = postEmail;

var makeEmailReadOnly = function makeEmailReadOnly(data) {
  var valueToDisplay = Object.values(data).find(function (value) {
    return value.email;
  });

  if (valueToDisplay) {
    var emailValue = valueToDisplay.email;
    email.prop("disabled", true);
    email.attr("value", emailValue);
    email.val(emailValue);
  }
};

exports.makeEmailReadOnly = makeEmailReadOnly;