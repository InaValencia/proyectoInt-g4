const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerControllers')

router.get('/register', registerController.showRegister)










module.exports = router