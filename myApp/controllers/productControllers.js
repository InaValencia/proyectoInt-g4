const dataBase = require('../db/dataBase')

const productController = {
    showProduct: function (req, res) {
        return res.render('products', {
            user: dataBase.user,
            products: dataBase.products,
            comments: dataBase.comments,
            logueado: dataBase.user.logueado,
        })
    },
    showProductAdd: 
    function (req, res) {
        return res.render('product-add', {
            user: dataBase.user,
            logueado: dataBase.user.logueado,
        })
    }
} ;

module.exports = productController;