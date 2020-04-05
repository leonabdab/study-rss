"use strict";

var express = require('express');

var router = express.Router();

var dataController = require('../api/data/dataController');

router.use(express.json());
router.get('/', function (req, res) {
  return dataController.get(req, res);
});
router.get('/all', function (req, res) {
  return dataController.getAll(req, res);
});
router.post('/', function (req, res, next) {
  return dataController.post(req, res, next);
});
module.exports = router;