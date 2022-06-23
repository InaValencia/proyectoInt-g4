const db = require('../database/models/');
const op = db.Sequelize.Op;
const product = db.Product;

const searchResultsController = {
    findProduct: (req, res) => {
        let palabraBuscada = req.query.search;
        let filtro ={
            where :{
             [op.or]: [
               { model: { [op.like]: `%${ palabraBuscada}%` } },
               { description: { [op.like]: `%${ palabraBuscada}%` } }
             ]
           }, 
            include: [ { association: 'user' }],
            order: [[ "createdAt" , "DESC"]]
           }
      
        product.findAll(filtro)
        .then((result) => {
        return res.render('search-results', { product : result } )
        }).catch((err) => {
            console.log(err);
        });
    }

};

module.exports = searchResultsController;