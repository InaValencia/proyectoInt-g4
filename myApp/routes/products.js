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

// Ruta para mostrar una zapatilla

router.get('/id/:id', productController.showProduct)

//Rutas para mostrar un comentario

router.post('/id/:id', productController.comments)

// Rutas para eliminar una zapatilla 
router.post('/id/:id/delete', productController.deleteProduct)

// Rutas para agregar una zapatilla
router.get('/add' , productController.showProductAdd)

router.post('/store', upload.single('imgProduct'), productController.store)

// Rutas para EDITAR una zapatilla

router.get('/edit/:id' , productController.showProductEdit)

router.post('/edit/:id', upload.single('imgProduct'), productController.updateProduct)





module.exports = router;