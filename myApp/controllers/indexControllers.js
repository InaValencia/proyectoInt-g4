const dataBase = require('../db/dataBase')

const indexController = {
    showIndex: function (req, res) {
        return res.render('index', {
            user: dataBase.user,
            products: dataBase.products,
            comments: dataBase.comments,
            logueado: false,
        })
    },
    showLogin: function (req, res) {
        return res.render('login', {
                user: dataBase.user,
                products: dataBase.products,
                comments: dataBase.comments,
                logueado: true,
        })
    },
    showRegister: function (req, res) {
        return res.render('register', {
            user: dataBase.user,
            products: dataBase.products,
            comments: dataBase.comments,
            logueado: true,
        })
    }

};

module.exports = indexController;