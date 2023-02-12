const express = require('express');

const router = express.Router();

const { loginUser, signUpUser } = require('../controllers/usercontroler')

//login 
router.post('/login', loginUser)
// singup
router.post('/signup', signUpUser)

module.exports = router;
