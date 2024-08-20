const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

router.route('/login').post(authController.login);
router.route('/register').post(authController.register);

// router.post('/register',authController.register )
// router.post('/login',authController.login )

module.exports = router;
