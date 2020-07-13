// imports
const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/:id', controller.watchlists.show);

// exports
module.exports = router;