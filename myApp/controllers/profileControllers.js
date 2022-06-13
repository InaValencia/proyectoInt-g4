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
                return res.render('profile', { profile: profile })
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
        let errors = {};

        if (info.email == "") {
            errors.message = 'The email is empty'
            res.locals.errors = errors;
            return res.render('login')

        } else if (info.contrasena.length < 3) {
            errors.message = 'Passwords are required more than 3 words'
            res.locals.errors = errors;
            return res.render('login')
        }

        else {
            user.findOne(filtro)
                .then((result) => {

                    if (result != null) {
                        let passEncriptada = bcrypt.compareSync(info.contrasena, result.contrasena)
                        if (passEncriptada) {

                            req.session.user = result.dataValues;

                            if (req.body.recordarme != undefined) {
                                res.cookie('userId', result.dataValues.id, { maxAge: 1000 * 60 * 100 })
                            }

                            return res.redirect("/")

                        } else {
                            errors.message = 'The email exists, but the password is incorrect'
                            res.locals.errors = errors;
                            return res.render('login')
                        }
                    } else {
                        errors.message = 'The email does not exists'
                        res.locals.errors = errors;
                        return res.render('login')
                    }
                }).catch((err) => {
                    console.log(err);
                });
        }

    },
    register: function (req, res) {
        return res.render('register')

    },
    procesarRegister: function (req, res) {
        let info = req.body;
        let imgPerfil = req.file.filename;
        console.log(info);
        let errors = {};
        let filtro = {
            where: [{
                email: info.email
            }]
        };
        

        if (info.email == "") {
            errors.message = "The email is required";
            res.locals.errors = errors;
            return res.render('register')

        } else if (info.contrasena.length < 3) {
            errors.message = 'Passwords are required more than 3 words'
            res.locals.errors = errors;
            return res.render('register')

        } else if (info.nombre.length == "") {
            errors.message = 'Your name is required'
            res.locals.errors = errors;
            return res.render('register')
        
        } 
        else {
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
          }
           user.findOne()
                .then(function (result) {
                    if (info.email != result.email) {
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
                            })
                        
                    }
                    else {
                        errors.message = 'The email already exists'
                        res.locals.errors = errors;
                        return res.render('register')
                    }
                }).catch(function (err) {
                    console.log(err);
                })



    },


    
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/')
    },

    updateProfile: (req, res) => {
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

