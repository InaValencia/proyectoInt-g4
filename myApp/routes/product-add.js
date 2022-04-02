const express = require('express');
const router = express.Router;
const productAddController = require('../controllers/productAddControllers')

router.get('/product-add', productAddController)







module.exports = router;