"use strict";

var formatToEmail = function formatToEmail(emailTitle, emailContent) {
  var email = "<h2>".concat(emailTitle, "</h2>");
  emailContent.forEach(function (contentItem) {
    email += "<p>".concat(contentItem, "</p>");
  });
  return email;
};

module.exports = formatToEmail;