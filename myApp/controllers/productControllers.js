const dataBase = require('../db/dataBase')
const db = require('../database/models');
const product = db.Product
const op = db.Sequelize.Op
const comment = db.Comment

const productController = {
    showProduct: (req, res) => {
        let id = req.params.id;
        
        let filtro = {
            include : {
                all: true,
                nested: true
            },
            order : [["comment", "createdAt" , "DESC"]]
        }

        product.findByPk(id, filtro)
            .then((result) => {
                return res.render('products', { product: result.dataValues })
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
            users_id: req.session.user.id
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
                users_id: req.session.user.id
            }
            return res.render('product-edit', { product: shoe })
        }).catch((err) => {
            console.log(err);
        });
    },
    updateProduct: (req, res) => {


        if(req.session.user.id == req.body.users_id) {
            let info = req.body;
            let imgProduct = req.file.filename;
    
            let shoe = {
                photo: imgProduct,
                model: info.model,
                description: info.description,
                users_id: req.session.user.id
            }
    
            let filtro = {
                where: {
                    id: req.params.id
                }
            };
            product.update(shoe, filtro)
            .then((result) => {
                return res.redirect('/')
            }).catch((err) => {
                console.log(err);
            });
        }
         else {
            res.redirect('/profile/login')
        }
        
    },
    deleteProduct: (req, res) => {
        let id = req.params.id
        product.destroy({
            where: {
                id: id
            }
        }).then((result) => {
            return res.redirect('/')
        }).catch((err) => {
            res.send(err)
        });
    },
    comments: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/profile/login')
           
        
        } 
        let info = req.body
        let comentario = {
            comentario: info.comentario,
            products_id: req.params.id,
            users_id: req.session.user.id,
        }
        comment.create(comentario)
        .then((result) => {
            return res.redirect('/products/id/' + req.params.id)
        }).catch((err) => {
            console.log(err);
        });
       
    },

};

module.exports = productController;