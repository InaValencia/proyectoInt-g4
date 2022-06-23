const dataBase = require('../db/dataBase');
const db = require('../database/models');
const product = db.Product;
const op = db.Sequelize.Op;
const comment = db.Comment;

const productController = {
    showProduct: (req, res) => {
        let id = req.params.id;
        
        let filtro = {
            include : {
                all: true,
                nested: true
            },
            order : [["comment", "createdAt" , "DESC"]]
        };

        product.findByPk(id, filtro)
            .then((result) => {
                return res.render('products', { product: result.dataValues })
            }).catch((err) => {
                console.log(err);
            });
    },
    showProductAdd: function (req, res) {
        return res.render('product-add');
    },

    store: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/profile/login')
        } 
        
        let info = req.body;
        let imgProduct = req.file.filename;
        let shoe = {
            photo: imgProduct,
            model: info.model,
            description: info.description,
            users_id: req.session.user.id
        };
        let errors = {};
         if (info.model == "") {
            errors.message = 'A model is required';
            res.locals.errors = errors;
            return res.render('product-add')

            
        } else if (info.description == "") {
            errors.message = 'A description is needed';
            res.locals.errors = errors;
            return res.render('product-add')


        } else if (imgProduct == undefined) {
            errors.message = 'An image is required';
            res.locals.errors = errors;
            return res.render('product-add')


        } else{ product.create(shoe)
            .then((result) => {
                return res.redirect('/')
            }).catch((err) => {
                return res.send('Hay un error' + err)
            });}

    },
    showProductEdit: (req, res) => {
        let id = req.params.id;
        let filtro = {
            include : {
                all: true,
                nested: true
            }
        }
        product.findByPk(id, filtro).then((result) => {
            return res.render('product-edit', { product: result.dataValues });
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
                users_id: info.users_id
            }
    
            let filtro = {
                where: {
                    id: req.params.id
                }
            };

            if(req.session.user.id == shoe.users_id) {
            product.update(shoe, filtro)
            .then((result) => {
                console.log(shoe.users_id);
                console.log(shoe.users_id);
                return res.redirect('/')
            }).catch((err) => {
                console.log(err);
            });
            }
            else {
                console.log(shoe.users_id);
                console.log(shoe.users_id);
                return res.redirect('/profile/login')
            }
    
        
    },
    deleteProduct: (req, res) => {
        let id = req.params.id;
        let info = req.body
        let shoe = {
            users_id : info.users_id
        }
        if (req.session.user.id == shoe.users_id) {
            product.destroy({
                where: {
                    id: id
                }
            }).then((result) => {
                return res.redirect('/')
            }).catch((err) => {
                res.send(err)
            });
        }
        else {
            return res.redirect('/profile/login')
        }
      
    },
    comments: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/profile/login')
        } 

        let info = req.body;
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