"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllData = exports.getRssEmailData = exports.postData = void 0;

var _rss = require("./rss.js");

var _email = require("./email.js");

var email = $('#email');
var rssInput = $('#rss-input');
var contentType = "application/json; charset=utf-8";

var postData = function postData() {
  var reqValues, response, data, ids;
  return regeneratorRuntime.async(function postData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          reqValues = JSON.stringify({
            rss: rssInput.val(),
            email: email.val()
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('/data', {
            method: 'post',
            headers: {
              'Content-Type': contentType
            },
            body: reqValues
          }));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;

          if (!data) {
            _context.next = 15;
            break;
          }

          ids = (0, _rss.buildIDs)(data);

          _rss.rssList.append(linkTemplate(data, ids));

          rssInput.val('');
          (0, _rss.editRssLink)(data, ids.rssLinkId, ids.editId);
          (0, _rss.deleteRssLink)(data, ids.rssListItemId, ids.deleteId);
          return _context.abrupt("return", data);

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.error("Unexpected error: ".concat(_context.t0.message, ". Try again"));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 17]]);
};

exports.postData = postData;

var getRssEmailData = function getRssEmailData() {
  var response, data;
  return regeneratorRuntime.async(function getRssEmailData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch('/data', {
            method: 'get'
          }));

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context2.sent;

          if (!data) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", data);

        case 9:
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error("Unexpected error: ".concat(_context2.t0.message, ". Try again"));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

exports.getRssEmailData = getRssEmailData;

var getAllData = function getAllData() {
  var response, data;
  return regeneratorRuntime.async(function getAllData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(fetch('/data/all', {
            method: 'get'
          }));

        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context3.sent;

          if (!data) {
            _context3.next = 11;
            break;
          }

          displayRssLinkList(data);
          (0, _email.makeEmailReadOnly)(data);
          return _context3.abrupt("return", data);

        case 11:
          _context3.next = 16;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          console.error("Unexpected error: ".concat(_context3.t0.message, ". Try again"));

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.getAllData = getAllData;

var linkTemplate = function linkTemplate(rssLink, ids) {
  return "\n    <li id=\"".concat(ids.rssListItemId, "\" class=\"list-group-item\">\n      <div class=\"row\">\n         <div id=\"").concat(ids.rssLinkId, "\" class=\"col-md-4\">").concat(rssLink.rss, "</div>\n         <div class=\"col-md-4\"></div>\n         <div class=\"col-md-4 text-right\">\n          <button id=\"").concat(ids.editId, "\" class=\"btn btn-secondary rss-list__button\">Edit</button>\n          <button id=\"").concat(ids.deleteId, "\" class=\"btn btn-danger rss-list__button\">Delete</button>\n        </div>\n      </div>\n    </li>");
};

var displayRssLinkList = function displayRssLinkList(data) {
  data.forEach(function (rssLink) {
    if (rssLink.rss) {
      var ids = (0, _rss.buildIDs)(rssLink);

      _rss.rssList.append(linkTemplate(rssLink, ids));

      (0, _rss.editRssLink)(rssLink, ids.rssLinkId, ids.editId);
      (0, _rss.deleteRssLink)(rssLink, ids.rssListItemId, ids.deleteId);
    }
  });
};