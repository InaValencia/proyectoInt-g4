const dataBase = require('../db/dataBase');
const db = require('../database/models');
const op = db.Sequelize.Op

const indexController = {
    showIndex: function (req, res) {
        db.Products.findByPk(1).then(function (result) {
        let product = {
            description: result.description,
            model: result.model,
            photo: result.photo,

            user: dataBase.user,
            products: dataBase.products,
            mostPopular: dataBase.mostPopular,
            logueado: dataBase.user.logueado,
        } 
        return res.render('index', {
            product: product
        })


        })
    
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