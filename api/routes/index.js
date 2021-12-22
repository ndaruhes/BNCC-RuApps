var express = require('express');
var router = express.Router();

// CALL CONTROLLER
authController = require('../controllers/auth');

// CALL MIDDLEWARE
const checkAuth = require('../middleware/checkAuth')


router.get('/', function(req, res) {
  res.send('ahai')
});


// AUTHENTICATION
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/profile', checkAuth, authController.profile);

module.exports = router;
