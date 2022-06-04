const dataBase = require('../db/dataBase');
const db = require('../database/models/');
const op = db.Sequelize.Op;

const searchResultsController = {
    /* showSearchResults: function (req, res) {
        return res.render('search-results', {
            user: dataBase.user,
            products: dataBase.products,
            logueado: dataBase.user.logueado,
        })
    },*/
    findShoes : (req, res) => {
        let busqueda = req.params.search;
        db.Products.findAll({
            where: [
                { model : {[op.like] : `% ${busqueda} %` }}
            ]
        }).then((result) => {
            res.send('search-results', {
                busqueda : busqueda
            })

        }).catch((err) => {
            console.log(err);
        });
    }

} ;

module.exports = searchResultsController;