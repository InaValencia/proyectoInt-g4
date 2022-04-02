const express = require('express');
const router = express.Router;
const profileEditController = require('../controllers/profileEditControllers')

router.get('/profile-edit', profileEditController)







module.exports = router;