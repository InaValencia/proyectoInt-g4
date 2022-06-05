const dataBase = require('../db/dataBase');
const db = require('../database/models');
const user = db.User

const bcrypt = require('bcryptjs');

const profileController = {
    showProfile: function (req, res) {
        return res.render('profile', {
            user: dataBase.user,
            products: dataBase.products,
            logueado: dataBase.user.logueado,
        })
    },
    login: function (req, res) {
        return res.render('login')
    },
    procesarLogin: function (req, res) {
        let info = req.body
        let filtro = {
            where: [{
                email: info.mail
            }]
        };

        user.findOne(filtro)
            .then((result) => {

                if (result != null) {
                    let passEncriptada = bcrypt.compareSync(info.password, result.password)
                    if (passEncriptada) {
                        return res.redirect('/')
                    } else {
                        return res.send('existe el mail ' + result.mail + 'pero la clave es incorrecta')
                    }
                } else {
                    return res.send('no existe el mail ' + info.mail)
                }




            }).catch((err) => {

            });

    },
    register: function (req, res) {
        return res.render('/register')

    },
    procesarRegister : function (req, res ) {
        let info = req.body; 
        let usuario = {
            mail : info.mail,
            name : info.name,
            surname : info.surname,
            password : bcrypt.hashSync(info.password, 10),
            photo : info.photo,
            
        } 
        user.create(usuario)
        .then((result) => {
            return res.redirect('/login')
        }).catch((err) => {
            
        });
    },




    showProfileEdit: function (req, res) {
        return res.render('profile-edit', {
            user: dataBase.user,
            logueado: dataBase.user,
        })
    }
};

module.exports = profileController;
