// imports
const router = require('express').Router();
const controller = require('../controllers');

// routes
router.post('/register', controller.auth.register);
router.post('/login', controller.auth.login);

// exports
module.exports = router;