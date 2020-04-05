"use strict";

var express = require('express');

var router = express.Router();

var rssController = require('../api/rss/rssController');

router.use(express.json());
router.get('/', function (req, res) {
  return rssController.get(req, res);
});
router.get('/parsed/email', function (req, res) {
  return rssController.getRssEmailContent(req, res);
});
router.post('/', function (req, res, next) {
  return rssController.post(req, res, next);
});
router.put('/:id', function (req, res) {
  return rssController.put(req, res);
});
router["delete"]('/:id', function (req, res) {
  return rssController.deleteRss(req, res);
});
module.exports = router;