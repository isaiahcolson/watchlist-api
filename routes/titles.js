// imports
const router = require('express').Router();
const controller = require('../controllers');

// add authRequired to all routes that need hidden
const authRequired = require('../middleware/authRequired');

// routes
router.get('/', controller.titles.index);
router.get('/:id', controller.titles.show);

// exports
module.exports = router;