var express = require('express');
var router = express.Router();

// CALL CONTROLLER
AuthController = require('../controllers/Auth');
TestimoniController = require('../controllers/Testimoni');
ContactController = require('../controllers/Contact');

// CALL MIDDLEWARE
const CheckAuth = require('../middleware/CheckAuth')


router.get('/', function(req, res) {
  res.redirect('https://ruapps.netlify.app');
});


// AUTHENTICATION
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/profile', CheckAuth, AuthController.profile);

// TESTIMONI
router.get('/allTestimoni', TestimoniController.allTestimoni);
router.get('/userTestimoni', CheckAuth, TestimoniController.userTestimoni);
router.post('/testimoni', CheckAuth, TestimoniController.store);
router.get('/testimoni/:id', CheckAuth, TestimoniController.show);
router.put('/testimoni/:id', CheckAuth, TestimoniController.update);
router.delete('/testimoni/:id', CheckAuth, TestimoniController.delete);

// CONTACT
router.get('/contact', CheckAuth, ContactController.index);
router.post('/contact', ContactController.store);
router.get('/contact/:id', CheckAuth, ContactController.show);
router.delete('/contact/:id', CheckAuth, ContactController.delete);

module.exports = router;
