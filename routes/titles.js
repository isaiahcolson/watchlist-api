// imports
const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/', controller.titles.index);
router.get('/:id', controller.titles.show);

// exports
module.exports = router;