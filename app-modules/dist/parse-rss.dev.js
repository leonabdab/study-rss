"use strict";

var Parser = require('rss-parser');

rssParser = new Parser();

var parseRss = function parseRss(data) {
  return data.map(function _callee(rssLink) {
    var feed, emailContent;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(rssParser.parseURL(rssLink.rss));

          case 2:
            feed = _context.sent;
            emailContent = {
              title: feed.title,
              content: []
            };
            feed.items.forEach(function (item) {
              emailContent.content.push("".concat(item.title, " : ").concat(item.link));
            });
            return _context.abrupt("return", emailContent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};

module.exports = parseRss;