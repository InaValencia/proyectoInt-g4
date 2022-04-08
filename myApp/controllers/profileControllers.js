const dataBase = require('../db/dataBase')

const profileController = {
    showProfile: function (req, res) {
        return res.render('profile', {
            user: dataBase.user,
            products: dataBase.products,
            logueado: true,
        })
    },
    showProfileEdit: function (req, res) {
        return res.render('profile-edit', {
            user: dataBase.user,
            logueado: true,
        })
    }
};

module.exports = profileController;
