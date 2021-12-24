var express = require('express');
var router = express.Router();

// CALL CONTROLLER
AuthController = require('../controllers/Auth');
TestimoniController = require('../controllers/Testimoni');

// CALL MIDDLEWARE
const CheckAuth = require('../middleware/CheckAuth')


router.get('/', function(req, res) {
  res.send('ahai')
});


// AUTHENTICATION
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/profile', CheckAuth, AuthController.profile);

// TESTIMONI
router.get('/testimoni', TestimoniController.index);
router.post('/testimoni', CheckAuth, TestimoniController.store);
router.get('/testimoni/:id', CheckAuth, TestimoniController.show);
router.put('/testimoni/:id', CheckAuth, TestimoniController.update);
router.delete('/testimoni/:id', CheckAuth, TestimoniController.delete);

module.exports = router;
