const express = require('express');
const router = express.Router();
const userController = require('../api/user/userController');
router.use(express.json());

router.get('/', (req, res) => userController.get(req, res));
router.get('/all', (req, res) => userController.getAll(req, res));
router.get('/parser/email', (req, res) => userController.parseAndSendEmail(req, res));
router.post('/', (req, res, next) => userController.post(req, res, next));


module.exports = router;