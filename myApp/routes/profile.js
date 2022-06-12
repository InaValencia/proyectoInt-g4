const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileControllers')


// Multer
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



router.get('/', profileController.showProfile);

router.get('/edit', profileController.showProfileEdit);


/// Login
router.get('/login', profileController.login)

router.post('/login', profileController.procesarLogin)

// Register
router.get('/register', profileController.register)

router.post('/register', upload.single('imgPerfil'), profileController.procesarRegister)

//logout
router.get('/logout', profileController.logout)




module.exports = router;