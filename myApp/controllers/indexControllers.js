const dataBase = require('../db/dataBase');
const db = require('../database/models');
const op = db.Sequelize.Op
const products = db.Product


const indexController = {
     index: (req, res) => {
        products.findAll({
            order: [[ "createdAt" , "DESC"]]
        })
        .then((result) => {
            return res.render('index', {products : result})
        }).catch((err) => {
            
        });
     }, 
}
module.exports = indexController