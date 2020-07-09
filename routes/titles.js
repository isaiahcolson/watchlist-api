// imports
const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/', controller.titles.index);

// exports
module.exports = router;