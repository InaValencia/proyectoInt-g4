const express = require('express');
const router = express.Router;
const profileController = require('../controllers/profileControllers')

router.get('/profile', profileController);







module.exports = profile;