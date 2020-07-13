// imports
const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/:id', controller.watchlists.show);
router.put('/:id/add', controller.watchlists.update);

// exports
module.exports = router;