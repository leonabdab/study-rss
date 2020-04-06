"use strict";

var DbSchema = require('../schema');

var parseRss = require('../../app-modules/parse-rss');

var formatToHTML = require('../../app-modules/format-email');

var sendMail = require('../../app-modules/send-mail');

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
}; // const getRssEmailContent = async (req, res) => {
//     try {
//         const data = await getDataFromSchema();
//         const rssData = await Promise.all(parseRss(data));
//         let emailToSend = '';
//         if (rssData) {
//             rssData.forEach(rssLink => {
//                 emailToSend += formatToHTML(rssLink.title, rssLink.content);
//             })
//             sendMail('marta.gorlicka@gmail.com', emailToSend)
//             res.set('Content-Type', 'text/html')
//             res.status(200).send(emailToSend);
//         }
//     } catch (error) {
//         console.error(error)
//         console.error('RssGet: ', error.message);
//     }
// }


var put = function put(req, res) {
  var id, _ref, rss, newRss;

  return regeneratorRuntime.async(function put$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(req.body);

        case 4:
          _ref = _context2.sent;
          rss = _ref.rss;

          if (id) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(404).send("Error: id: ".concat(id, " not found")));

        case 8:
          if (!rss) {
            _context2.next = 13;
            break;
          }

          _context2.next = 11;
          return regeneratorRuntime.awrap(DbSchema.findByIdAndUpdate(id, {
            $set: {
              rss: rss
            }
          }, {
            "new": true
          }));

        case 11:
          newRss = _context2.sent;
          res.json(newRss);

        case 13:
          _context2.next = 18;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          console.error('RssPut: ', _context2.t0.message);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 15]]);
};

var post = function post(req, res, next) {
  var rss, newRss, response;
  return regeneratorRuntime.async(function post$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          rss = req.body.rss;

          if (!rss) {
            _context3.next = 8;
            break;
          }

          newRss = new DbSchema({
            rss: rss
          });
          _context3.next = 6;
          return regeneratorRuntime.awrap(newRss.save());

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
          console.error('RssPost: ', _context3.t0.message);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

var deleteRss = function deleteRss(req, res) {
  var id, deletedRss;
  return regeneratorRuntime.async(function deleteRss$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;

          if (id) {
            _context4.next = 4;
            break;
          }

          return _context4.abrupt("return", res.status(404).send("Error: id: ".concat(id, " not found")));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(DbSchema.findByIdAndRemove(id));

        case 6:
          deletedRss = _context4.sent;
          res.json(deletedRss);
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error('RssDelete: ', _context4.t0.message);

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

module.exports = {
  get: get,
  put: put,
  post: post,
  deleteRss: deleteRss // getRssEmailContent

};