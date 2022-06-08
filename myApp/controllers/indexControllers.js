const dataBase = require('../db/dataBase');
const db = require('../database/models');
const op = db.Sequelize.Op
const products = db.Products


const indexController = {
    showIndex: function (req, res) {
        /* db.Products.findByPk(1).then(function (result) {
        let product = {
            user: dataBase.user,
            products: dataBase.products,
            mostPopular: dataBase.mostPopular,
            logueado: dataBase.user.logueado,
        } 
        return res.render('index', {
            product: product
        })


        }) */
    },
     index: (req, res) => {
        products.findAll({
            order: [[ "createdAt" , "DESC"]]
        })
        .then((result) => {
            return res.render('index', {products : result})
        }).catch((err) => {
            
        });
     }, 

    showLogin: function (req, res) {
        return res.render('login', {
            user: dataBase.user,
            logueado: dataBase.user.logueado,
        })
    },
    showRegister: function (req, res) {
        return res.render('register', {
            user: dataBase.user,
            logueado: dataBase.user.logueado,
        })
    }, 

}
module.exports = indexController