const express = require('express');
const emailController = require('../api/email/emailController');
const router = express.Router();
router.use(express.json());

router.post('/', (req, res, next) => emailController.post(req, res, next));
router.get('/', (req, res) => emailController.get(req, res))

module.exports = router;