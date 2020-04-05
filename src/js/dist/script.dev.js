"use strict";

var _data = require("./data.js");

var _rss = require("./rss.js");

$(document).ready(function () {
  var form = $('#rss-email-form');
  (0, _data.getAllData)();
  form.submit(function (e) {
    e.preventDefault();
    (0, _data.postData)();
  });
});
$('#send').click(function () {
  var preview = function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _rss.getRssLinksPreview)());

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }(); // console.log(preview)
  //    $('#email-preview').html(getRssLinksPreview());

});