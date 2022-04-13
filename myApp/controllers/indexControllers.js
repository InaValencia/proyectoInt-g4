const dataBase = require('../db/dataBase')

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
    }

};

module.exports = indexController;