const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileControllers')

router.get('/', profileController.showProfile);

router.get('/edit', profileController.showProfileEdit);









module.exports = router;