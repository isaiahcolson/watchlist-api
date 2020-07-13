// imports
const router = requre('express').Router();
const controller = require('../controllers');

// routes
router.get('/:id', controller.watchlist.show);

// exports
module.exports = router;