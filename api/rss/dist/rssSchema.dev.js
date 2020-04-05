"use strict";

var mongoose = require('mongoose');

var rssSchema = mongoose.Schema({});
var rssModel = mongoose.model('Rss', rssSchema, 'user');
module.exports = rssModel;