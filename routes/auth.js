// imports
const router = require('express').Router();
const controller = require('../controllers');

// add authRequired to all routes that need hidden
const authRequired = require('../middleware/authRequired');

// routes
router.post('/register', controller.auth.register);
router.post('/login', controller.auth.login);
router.get('/profile', authRequired, controller.auth.profile);

// exports
module.exports = router;