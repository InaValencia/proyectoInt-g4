const dataBase = require('../db/dataBase');
const db = require('../database/models/');
const op = db.Sequelize.Op;
const product = db.Products;

const searchResultsController = {
    /* showSearchResults: function (req, res) {
        return res.render('search-results', {
            user: dataBase.user,
            products: dataBase.products,
            logueado: dataBase.user.logueado,
        })
    },*/
    /* findShoes : (req, res) => {
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
    }, */

    findProduct: (req, res) => {
        let palabraBuscada = req.query.search;
        let filtro ={
            where :{
             [op.or]: [
               { model: { [op.like]: `%${ palabraBuscada}%` } },
               { description: { [op.like]: `%${ palabraBuscada}%` } }
             ]
           }
           }
      
        product.findAll(filtro).then((result) => {
            res.render('search-results', { products : result } )
            res.send(result)
        }).catch((err) => {
            console.log(err);
        });
    }

};

module.exports = searchResultsController;