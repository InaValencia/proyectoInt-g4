const db = require('../database/models');
const op = db.Sequelize.Op
const products = db.Product


const indexController = {
     index: (req, res) => {
        products.findAll(  
        {
            include: [ { association: 'user' }],
            order: [[ "createdAt" , "DESC"]]
        }
        )
        .then((result) => {
            return res.render('index', {product : result})

        }).catch((err) => {
            console.log(err);
        });
     }, 
}
module.exports = indexController