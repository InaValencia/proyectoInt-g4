const dataBase = require('../db/dataBase') //

const loginController = {
    showLogin: function (req, res) {
        return res.render('login', {
                user: dataBase.user,
                products: dataBase.products,
                comments: dataBase.comments,
                logueado: true,
        })
    }
};

module.exports = loginController;

//esto va directo a indexController. 