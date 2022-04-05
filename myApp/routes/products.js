const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

router.get('/', productController.showProduct)

router.get('/add' , productController.showProductAdd)






module.exports = router;