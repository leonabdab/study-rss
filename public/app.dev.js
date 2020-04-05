"use strict";

var express = require('express');

var path = require('path');

var cors = require('cors');

var db = require('./app-modules/db');

var routes = require('./api/routes');

var emailRouter = require('./routes/email');

var rssRouter = require('./routes/rss');

var dataRouter = require('./routes/data');

var app = express();
app.use(express.json());
db.connect();
var PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express["static"](path.join(__dirname, 'src')));
app.use(routes.email, emailRouter);
app.use(routes.rss, rssRouter);
app.use(routes.data, dataRouter);
app.get(routes.main, function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});
app.listen(PORT, function () {
  console.log("server running on ".concat(PORT, "..."));
});