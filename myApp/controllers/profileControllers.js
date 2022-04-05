const dataBase = require('../db/dataBase')

const profileController = {
    showProfile: function (req, res) {
        return res.render('profile', {
            user: dataBase.user,
            products: dataBase.products,
            comments: dataBase.comments,
            logueado: true,
        })
    }
};

module.exports = profileController;

//esto va directo a indexController y este archivo se borra. 