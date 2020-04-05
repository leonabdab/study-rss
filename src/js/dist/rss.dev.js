"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRssLinksPreview = exports.editRssLink = exports.deleteRssLink = exports.postRssLink = exports.buildIDs = exports.getRssLinks = exports.rssInput = exports.rssList = void 0;
var contentType = "application/json; charset=utf-8";
var rssList = $('#rss-list');
exports.rssList = rssList;
var rssInput = $('#rss-input');
exports.rssInput = rssInput;

var getRssLinks = function getRssLinks() {
  var fetchOptions, rss, result;
  return regeneratorRuntime.async(function getRssLinks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          fetchOptions = {
            method: 'get'
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('/rss', fetchOptions));

        case 4:
          rss = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(rss.json());

        case 7:
          result = _context.sent;
          return _context.abrupt("return", result);

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

exports.getRssLinks = getRssLinks;

var buildIDs = function buildIDs(rss) {
  return {
    editId: "edit-".concat(rss._id),
    deleteId: "delete-".concat(rss._id),
    rssListItemId: "list-item-".concat(rss._id),
    rssLinkId: "rss-".concat(rss._id)
  };
};

exports.buildIDs = buildIDs;

var postRssLink = function postRssLink() {
  var rss, data;
  return regeneratorRuntime.async(function postRssLink$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetch('/rss', {
            method: 'post',
            body: JSON.stringify({
              rss: rssInput.val()
            }),
            headers: {
              "Content-Type": contentType
            }
          }));

        case 3:
          rss = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(rss.json());

        case 6:
          data = _context2.sent;
          return _context2.abrupt("return", data);

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error("Unexpected error: ".concat(_context2.t0.message, ". Please try again"));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.postRssLink = postRssLink;

var deleteRssLink = function deleteRssLink(rssLink, rssListItemId, deleteId) {
  var deleteButton = $("#".concat(deleteId));
  deleteButton.click(function _callee() {
    var item, response;
    return regeneratorRuntime.async(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(fetch("/rss/".concat(rssLink._id), {
              method: 'delete'
            }));

          case 3:
            item = _context3.sent;
            _context3.next = 6;
            return regeneratorRuntime.awrap(item.json());

          case 6:
            response = _context3.sent;

            if (response) {
              $("#".concat(rssListItemId)).remove();
            }

            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.error("Unexpected error: ".concat(_context3.t0.message, ". Please try again"));

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 10]]);
  });
};

exports.deleteRssLink = deleteRssLink;

var editRssLink = function editRssLink(rssLink, rssLinkId, editId) {
  var editButton = $("#".concat(editId));
  editButton.click(function _callee2() {
    var item, data;
    return regeneratorRuntime.async(function _callee2$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(fetch("/rss/".concat(rssLink._id), {
              method: 'put',
              headers: {
                "Content-Type": contentType
              },
              body: JSON.stringify({
                rss: rssInput.val()
              })
            }));

          case 3:
            item = _context4.sent;
            _context4.next = 6;
            return regeneratorRuntime.awrap(item.json());

          case 6:
            data = _context4.sent;

            if (data) {
              $("#".concat(rssLinkId)).html(data.rss);
            }

            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.error("Unexpected error: ".concat(_context4.t0.message, ". Please try again"));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 10]]);
  });
};

exports.editRssLink = editRssLink;

var getRssLinksPreview = function getRssLinksPreview() {
  var preview, result;
  return regeneratorRuntime.async(function getRssLinksPreview$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(fetch('/rss/parsed/email', {
            method: 'get'
          }));

        case 3:
          preview = _context5.sent;
          _context5.next = 6;
          return regeneratorRuntime.awrap(preview);

        case 6:
          result = _context5.sent;
          console.log(result); // return await preview.json();        

          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          console.error('RssPreview: ', _context5.t0.message);

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getRssLinksPreview = getRssLinksPreview;