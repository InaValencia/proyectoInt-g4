const dataBase = require('../db/dataBase')

const registerController = {
    showRegister: function (req, res) {
        return res.render('register', {
            user: dataBase.user,
            products: dataBase.products,
            comments: dataBase.comments,
            logueado: true,
        })
    }
} ;

module.exports = registerController;