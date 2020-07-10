// imports
const router = require('express').Router();
const controller = require('../controllers');

const authRequired = require('../middleware/authRequired');

// routes
router.get('/', controller.titles.index);
router.get('/:id', controller.titles.show);

// exports
module.exports = router;