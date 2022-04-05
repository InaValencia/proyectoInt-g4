const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileControllers')

router.get('/', profileController.showProfile);

router.get('/', profileController.showProfileEdit);









module.exports = router;