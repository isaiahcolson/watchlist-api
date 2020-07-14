// imports
const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/:id', controller.watchlists.show);
router.put('/:id/add', controller.watchlists.update);
router.put('/:id/remove', controller.watchlists.updateRemove);

// exports
module.exports = router;