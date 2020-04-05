"use strict";

var express = require('express');

var emailController = require('../api/email/emailController');

var router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json()); // router.use(express.json());

router.post('/', function (req, res, next) {
  return emailController.post(req, res, next);
});
router.get('/', function (req, res) {
  return emailController.get(req, res);
});
module.exports = router;