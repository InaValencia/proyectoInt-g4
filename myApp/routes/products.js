const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

// Configuracion de Multer para subir foto del producto
let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/products')) 
    },
    filename : function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({storage : storage})

router.get('/', productController.showProduct)

router.get('/add' , productController.showProductAdd)

router.post('/store', upload.single('imgProduct'), productController.store)






module.exports = router;