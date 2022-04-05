const express = require('express')
const router = express.Router();
const indexController = require('../controllers/indexControllers')

router.get('/', indexController.showIndex);

router.get('/login', indexController.showIndex);

router.get('/register', indexController.showIndex);





module.exports = router;