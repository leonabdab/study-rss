const express = require('express');
const router = express.Router();
const rssController = require('../api/rss/rssController');
router.use(express.json());

router.get('/', (req, res) => rssController.get(req, res));
router.post('/', (req, res, next) => rssController.post(req, res, next));
router.put('/:id', (req, res) => rssController.put(req, res));
router.delete('/:id', (req, res) => rssController.deleteRss(req, res));

module.exports = router;