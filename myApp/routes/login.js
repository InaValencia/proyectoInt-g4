const express = require('express');
const router = express.Router;
const loginController = require('../controllers/loginControllers');

router.get('/login', loginController);







module.exports = login;