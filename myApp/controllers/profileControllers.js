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
    showProfileEdit: function (req, res) {
        return res.render('profile-edit', {
            user: dataBase.user,
            logueado: dataBase.user,
        })
    },

    login: function (req, res) {
        return res.render('login')
    },
    procesarLogin: function (req, res) {
        let info = req.body
        let filtro = {
            where: [{
                email: info.email
            }]
        };

        user.findOne(filtro)
            .then((result) => {

                if (result != null) {
                    let passEncriptada = bcrypt.compareSync(info.contrasena, result.contrasena)
                    if (passEncriptada) {

                        req.session.user = result.dataValues;

                        if (req.body.recordarme != undefined) {
                            res.cookie('user_id', result.dataValues.id, {maxAge : 1000 * 60 * 10 } )
                        }

                        return res.redirect('/')
                    } else {
                        return res.send('existe el email ' + result.email + 'pero la clave es incorrecta')
                    }
                } else {
                    return res.send('no existe el email ' + info.email)
                }




            }).catch((err) => {

            });

    },
    register: function (req, res) {
        return res.render('register')

    },
    procesarRegister: function (req, res) {
        let info = req.body;
        console.log(info);
        let usuario = {
            email: info.email,
            nombre: info.nombre,
            apellido: info.apellido,
            contrasena: bcrypt.hashSync(info.contrasena, 10),
            foto: info.foto,
        }
        user.create(usuario)
            .then((result) => {
                return res.redirect('/profile/login')
            }).catch((err) => {
                console.log(err);
            });
    },

};

module.exports = profileController;
