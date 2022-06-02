const dataBase = require('../db/dataBase')

const db = require('../database/models');
const { products } = require('../db/dataBase');
const product = db.Products
const op = db.Sequelize.Op

const productController = {
    showProduct: function (req, res) {
        return res.render('products', {
            user: dataBase.user,
            products: dataBase.products,
            comments: dataBase.comments,
            logueado: dataBase.user.logueado,
        })
    },
    showProductAdd: function (req, res) {
        return res.render('product-add', {
            user: dataBase.user,
            logueado: dataBase.user.logueado,
        })
    },

    store: function (req, res) {
        let info = req.body;
        let shoe = {
            img: info.img,
            model: info.model,
            description: info.description,
            // uploadDate: info.date,
        }
    products.create(shoe).then((result) => {
        return res.redirect('/products')
    }).catch((err) => {
        return res.send('Hay un error' + err)
    });


    }





} ;

module.exports = productController;