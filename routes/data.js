const express = require('express');
const router = express.Router();
const dataController = require('../api/data/dataController');
router.use(express.json());

router.get('/', (req, res) => dataController.get(req, res));
router.get('/all', (req, res) => dataController.getAll(req, res));
router.post('/', (req, res, next) => dataController.post(req, res, next));


module.exports = router;