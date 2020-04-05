"use strict";

var sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var sendEmail = function sendEmail(email) {
  var msg;
  return regeneratorRuntime.async(function sendEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          msg = {
            to: email,
            from: 'doubterleon@gmail.com',
            subject: 'Rss list',
            html: mjmlEmail
          };
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(sgMail.send(msg));

        case 4:
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0.toString());

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 6]]);
};

module.exports = sendEmail;