"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var rssParser = require('rss-parser');

var parseRss = function parseRss(rssLink) {
  var feed, emailBody;
  return regeneratorRuntime.async(function parseRss$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(rssParser.parseURL(rssLink));

        case 3:
          feed = _context.sent;
          console.log(feed.title);
          emailBody = feed.title;
          feed.items.forEach(function (item) {
            emailBody += (_readOnlyError("emailBody"), "\n             ".concat(item.title, " : ").concat(item.link, "\n            "));
          });
          console.log(emailBody);
          return _context.abrupt("return", emailBody);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error('RssParseError: ', _context.t0.message);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports = parseRss; // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
//                     const emailContent = parser.parseURL(CORS_PROXY + item.rssLink,
//                         (err, feed) => {
//                             if (err) {
//                                 console.log('Failed:', error);
//                             }
//                             let emailBody = `${feed.title}`
//                             feed.items.forEach(item => {
//                                 emailBody += `
//                             ${item.title} : ${item.link}
//                             `
//                             })
//                             // console.log(emailBody)
//                             $('#email-preview').html(emailBody);
//                             // return new Promise((resolve, reject) => resolve(emailBody));
//                         })