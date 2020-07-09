// imports
const router = require('express').Router();
const controller = require('../controllers');

const authRequired = require('../middleware/authRequired');

// routes
router.get('/', authRequired, controller.titles.index);
router.get('/:id', authRequired, controller.titles.show);

// exports
module.exports = router;