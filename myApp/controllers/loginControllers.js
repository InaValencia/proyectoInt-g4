const dataBase = require('../db/dataBase') //

const loginController = {
    showLogin: function (req, res) {
        return res.render('login', {
            //vacio
        })
    }
};

module.exports = loginController;