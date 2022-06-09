const dataBase = require('../db/dataBase')

const db = require('../database/models');
const product = db.Products
const op = db.Sequelize.Op

const productController = {
    showProduct: (req, res) => {
        let id = req.params.id;
        product.findByPk(id).then((result) => {
            let shoe = {
                id: result.id,
                photo: result.photo,
                model: result.model,
                description: result.description,    
            }
        console.log(shoe);
        return res.render('products', {products : shoe})
        }).catch((err) => {
            console.log(err);
        });
    },
    showProductAdd: function (req, res) {
        return res.render('product-add', {
            user: dataBase.user,
            logueado: dataBase.user.logueado,
        })
    },

    store: (req, res) => {
        let info = req.body;
        let imgProduct = req.file.filename;

        let shoe = {
            photo: imgProduct,
            model: info.model,
            description: info.description,    
        }; 


        product.create(shoe)
        .then((result) => {
            return res.redirect('/products')
        }).catch((err) => {
            return res.send('Hay un error' + err)
        });

    },
    showProductEdit: (req, res) => {
    let id = req.params.id;
    product.findByPk(id).then((result) => {
    let shoe = {
        id: result.id,
        photo: result.photo,
        model: result.model,
        description: result.description,  
    }
    return res.render('product-edit', {products : shoe})
    }).catch((err) => {
        console.log(err);
    });
    },
    updateProduct: (req, res) => {
        let info = req.body;
        let imgProduct = req.file.filename;

        let shoe = {
            photo: imgProduct,
            model: info.model,
            description: info.description,  
        }

        let filtro = {
            where : {
                id : req.params
            }
        };
        console.log(shoe);
        product.update(shoe, filtro)
        .then((result) => {
            return res.redirect('/')
        }).catch((err) => {
            console.log(err);
        });
    }


} ;

module.exports = productController;