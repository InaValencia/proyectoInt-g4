const dataBase = require('../db/dataBase')

const searchResultsController = {
    showSearchResults: function (req, res) {
        return res.render('search-results', {
            user: dataBase.user,
            products: dataBase.products,
            logueado: true,
        })
    }
} ;

module.exports = searchResultsController;