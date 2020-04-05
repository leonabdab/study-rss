"use strict";

var DbSchema = require('../schema');

var parseRss = require('../../app-modules/parse-rss');

var formatToHTML = require('../../app-modules/format-email');

var getDataFromSchema = function getDataFromSchema() {
  return DbSchema.find().select({
    email: 0,
    __v: 0
  });
};

var get = function get(req, res) {
  return regeneratorRuntime.async(function get$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.t0 = res;
          _context.next = 4;
          return regeneratorRuntime.awrap(getDataFromSchema());

        case 4:
          _context.t1 = _context.sent;
          return _context.abrupt("return", _context.t0.json.call(_context.t0, _context.t1));

        case 8:
          _context.prev = 8;
          _context.t2 = _context["catch"](0);
          console.error('RssGet: ', _context.t2.message);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var getRssEmailContent = function getRssEmailContent(req, res) {
  var data, rssData, emailToSend;
  return regeneratorRuntime.async(function getRssEmailContent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(getDataFromSchema());

        case 3:
          data = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(Promise.all(parseRss(data)));

        case 6:
          rssData = _context2.sent;
          emailToSend = '';

          if (rssData) {
            rssData.forEach(function (rssLink) {
              emailToSend += formatToHTML(rssLink.title, rssLink.content);
            });
            res.send(emailToSend);
          }

          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          console.error('RssGet: ', _context2.t0.message);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var put = function put(req, res) {
  var id, _ref, rss, newRss;

  return regeneratorRuntime.async(function put$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(req.body);

        case 4:
          _ref = _context3.sent;
          rss = _ref.rss;

          if (id) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).send("Error: id: ".concat(id, " not found")));

        case 8:
          if (!rss) {
            _context3.next = 13;
            break;
          }

          _context3.next = 11;
          return regeneratorRuntime.awrap(DbSchema.findByIdAndUpdate(id, {
            $set: {
              rss: rss
            }
          }, {
            "new": true
          }));

        case 11:
          newRss = _context3.sent;
          res.json(newRss);

        case 13:
          _context3.next = 18;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](0);
          console.error('RssPut: ', _context3.t0.message);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 15]]);
};

var post = function post(req, res, next) {
  var rss, newRss, response;
  return regeneratorRuntime.async(function post$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          rss = req.body.rss;

          if (!rss) {
            _context4.next = 8;
            break;
          }

          newRss = new DbSchema({
            rss: rss
          });
          _context4.next = 6;
          return regeneratorRuntime.awrap(newRss.save());

        case 6:
          response = _context4.sent;
          res.json(response);

        case 8:
          next();
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.error('RssPost: ', _context4.t0.message);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var deleteRss = function deleteRss(req, res) {
  var id, deletedRss;
  return regeneratorRuntime.async(function deleteRss$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;

          if (id) {
            _context5.next = 4;
            break;
          }

          return _context5.abrupt("return", res.status(404).send("Error: id: ".concat(id, " not found")));

        case 4:
          _context5.next = 6;
          return regeneratorRuntime.awrap(DbSchema.findByIdAndRemove(id));

        case 6:
          deletedRss = _context5.sent;
          res.json(deletedRss);
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.error('RssDelete: ', _context5.t0.message);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

module.exports = {
  get: get,
  put: put,
  post: post,
  deleteRss: deleteRss,
  getRssEmailContent: getRssEmailContent
};