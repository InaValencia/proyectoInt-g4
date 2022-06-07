const dataBase = require('../db/dataBase')

const db = require('../database/models');
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

    store: (req, res) => {
        let info = req.body;
        console.log(req.body);
        console.log(req.body.description);
        let shoe = {
            photo: info.photo,
            model: info.model,
            description: info.description,    
        }; 


        product.create(shoe)
        .then((result) => {
            return res.redirect('/products')
        }).catch((err) => {
            return res.send('Hay un error' + err)
        });

}

} ;

module.exports = productController;