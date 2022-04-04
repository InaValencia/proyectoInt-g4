const dataBase = require('../db/dataBase')

const productController = {
    showProduct: function (req, res) {
        return res.render('product', {
            user: dataBase.user,
            products: dataBase.products,
            comments: dataBase.comments,
            logueado: true,
        })
    }
} ;

module.exports = productController;