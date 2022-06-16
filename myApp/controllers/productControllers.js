const dataBase = require('../db/dataBase')
const db = require('../database/models');
const product = db.Product
const op = db.Sequelize.Op
const comment = db.Comment

const productController = {
    showProduct: (req, res) => {
        let id = req.params.id;
        product.findByPk(id, 
             { 
                include: 
                        { 
                            all: true, 
                            nested: true 
                        } 
            }
        )
        .then((result) => {
            let shoe = {
                id: result.id,
                photo: result.photo,
                model: result.model,
                description: result.description,
            }

        console.log(shoe);
        return res.render('products', {product : shoe})
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
            users_id:  req.session.user.id
        }; 


        product.create(shoe)
        .then((result) => {
            return res.redirect('/')
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
    return res.render('product-edit', {product : shoe})
    }).catch((err) => {
        console.log(err);
    });
    },
    updateProduct: (req, res) => {
        let info = req.body;
        let imgProduct = req.file.filename;
        console.log(req.params);
        let shoe = {
            photo: imgProduct,
            model: info.model,
            description: info.description,  
        }

        let filtro = {
            where : {
                id : req.params.id
            }
        };
        console.log(shoe);
        
        product.update(shoe, filtro)
        .then((result) => {
            return res.redirect('/')
        }).catch((err) => {
            console.log(err);
        });
    },
     deleteProduct: (req, res) => {
        let id = req.params.id
        product.destroy({
            where : { 
                id : id
            }
        })
        .then((result) => {
            console.log(result);
            return res.redirect('/')
        })

     },
    comments : (req, res) => {
        let info = req.body
        let comentario = {
            comentario : info.comentario,
            products_id: req.params.id,
            users_id : req.session.user.id,
        }
        comment.create(comentario)
        .then((result) => {
            return res.redirect('/products/id/' + req.params.id)
        }).catch((err) => {
            console.log(err);
        });
    },
    
} ;

module.exports = productController;