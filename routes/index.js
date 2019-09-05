const express = require('express');
const router = express.Router();
const { indexView, sneakersGet, sneakersDetail } = require('../controllers/index.controller');

router.get('/', indexView);
router.get('/sneakers', sneakersGet);
router.get('/sneakers/:id', sneakersDetail);

module.exports = router;
