const dataBase = require('../db/dataBase');
const db = require('../database/models');
const op = db.Sequelize.Op

const indexController = {
    showIndex: function (req, res) {
        return res.render('index', {
            user: dataBase.user,
            products: dataBase.products,
            mostPopular: dataBase.mostPopular,
            logueado: dataBase.user.logueado,
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
    showShoe : function (req, res) {
        db.Products.findByPk(1).then(function (result) {
            console.log(result)
            let product = {
                description : result.description,
                model : result.model,
                photo : result.photo
            }
            return res.render('index', {
                product : product
            })
        })
    

}
}
module.exports = indexController