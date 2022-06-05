const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileControllers')

router.get('/', profileController.showProfile);

router.get('/edit', profileController.showProfileEdit);


router.get('/login', profileController.login)

router.post('/login', profileController.procesarLogin)

router.get('/register', profileController.register)

router.post('/register', profileController.procesarRegister)





module.exports = router;