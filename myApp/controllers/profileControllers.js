const dataBase = require('../db/dataBase');
const db = require('../database/models');

const user = db.User
const bcrypt = require('bcryptjs');
const User = require('../database/models/User');

const profileController = {
    showProfile: function (req, res) {
        let id = req.params.id;
        user.findByPk(id)
        .then((result) => {
            let profile = {
                email: result.email,
                nombre: result.nombre,
                apellido: result.apellido,
                foto: result.foto, 
            }
        return res.render ('profile', {profile: profile})
        }).catch((err) => {
            console.log(err);
        });
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
                            res.cookie('userId', result.dataValues.id, {maxAge : 1000 * 60 * 100 } )
                        } 

                        return res.redirect("/")
                    
                    } else {
                        return res.send('existe el email ' + result.email + 'pero la clave es incorrecta')
                    }
                } else {
                    
                    return res.send('no existe el email ' + info.email)
                }
            }).catch((err) => {
                console.log(err);
            });     
    },
    register: function (req, res) {
        return res.render('register')

    },
    procesarRegister: function (req, res) {
        let info = req.body;
        let imgPerfil = req.file.filename;
        console.log(info);
        let usuario = {
            email: info.email,
            nombre: info.nombre,
            apellido: info.apellido,
            contrasena: bcrypt.hashSync(info.contrasena, 10),
            foto: imgPerfil,
        }
        user.create(usuario)
            .then((result) => {
                return res.redirect('/profile/login')
            }).catch((err) => {
                console.log(err);
            });
    },
    logout: (req,res) => {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/')
    },
    updateProfile: (req,res) => {
        let info = req.body;
        let imgPerfil = req.file.filename;
        let usuario = {
            email: info.email,
            nombre: info.nombre,
            apellido: info.apellido,
            foto: imgPerfil,
        }
        let filtro = {
            where: {
                id: req.params.id
            }
        }
        user.update(usuario, filtro)
        .then((result) => {
            return res.redirect('/')
        }).catch((err) => {
            
        });
    },

};

module.exports = profileController;
