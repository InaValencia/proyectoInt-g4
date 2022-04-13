const dataBase = require('../db/dataBase')

const profileController = {
    showProfile: function (req, res) {
        return res.render('profile', {
            user: dataBase.user,
            products: dataBase.products,
            logueado: dataBase.user.logueado,
        })
    },
    showProfileEdit: function (req, res) {
        return res.render('profile-edit', {
            user: dataBase.user,
            logueado: dataBase.user,
        })
    }
};

module.exports = profileController;
