const dataBase = require('../db/dataBase');
const db = require('../database/models');
const op = db.Sequelize.Op
const products = db.Product


const indexController = {
     index: (req, res) => {
        products.findAll({
            order: [[ "createdAt" , "DESC"]]
        },  
        {
            include:{
                all: true,
                nested:true
            } 
        })
        .then((result) => {
            console.log(result);
            return res.render('index', {products : result})
        }).catch((err) => {
            console.log(err);
        });
     }, 
}
module.exports = indexController