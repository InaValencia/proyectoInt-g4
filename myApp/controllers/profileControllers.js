const dataBase = require('../db/dataBase');
const db = require('../database/models');

const user = db.User
const bcrypt = require('bcryptjs');
const User = require('../database/models/User');
const follower = db.Follower

const profileController = {
    showProfile: function (req, res) {
        let id = req.params.id;
        user.findByPk(id,  {
            include:
            {
                all: true,
                nested: true
            }
        })
            .then((result) => {
                // return res.send(result)
                return res.render('profile', { profile: result.dataValues })
            }).catch((err) => {
                console.log(err);
            });
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
        //validacion de email
        let errors = {};

        if (info.email == "") {
            errors.message = 'The email is empty';
            res.locals.errors = errors;
            return res.render('login')

        } else if (info.contrasena.length < 3) {
            errors.message = 'Passwords are required more than 3 words';
            res.locals.errors = errors;
            return res.render('login')
        }


        else {
            user.findOne(filtro)
                .then((result) => {

                    if (result != null) {
                        let passEncriptada = bcrypt.compareSync(info.contrasena, result.contrasena);
                        if (passEncriptada) {

                            req.session.user = result.dataValues;

                            if (req.body.recordarme != undefined) {
                                res.cookie('userId', result.dataValues.id, { maxAge: 1000 * 60 * 100 })
                            }

                            return res.redirect("/")

                        } else {
                            errors.message = 'The email exists, but the password is incorrect';
                            res.locals.errors = errors;
                            return res.render('login')
                        }
                    } else {
                        errors.message = 'The email does not exists';
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
        //requerimientos de validacion
        if (info.email == "") {
            errors.message = "The email is required";
            res.locals.errors = errors;
            return res.render('register')

        } else if (info.contrasena.length < 3) {
            errors.message = 'Passwords are required more than 3 words';
            res.locals.errors = errors;
            return res.render('register')

        } else if (info.nombre.length == "") {
            errors.message = 'Your name is required';
            res.locals.errors = errors;
            return res.render('register')
        
        } else if (imgPerfil == ""){
            errors.message = 'An image is required';
            res.locals.errors = errors;
            return res.render('register')

        } 
        else {
            user.findOne(filtro)
                .then((result) => {
                    if (result == null) {
                        let info = req.body;
                        let imgPerfil = req.file.filename;
                        let usuario = {
                            email: info.email,
                            nombre: info.nombre,
                            apellido: info.apellido,
                            contrasena: bcrypt.hashSync(info.contrasena, 10),
                            foto: imgPerfil,
                        };
                        user.create(usuario)
                            .then((result) => {
                                return res.redirect('/profile/login')
                            }).catch((err) => {
                                console.log(err);
                            })
                        
                    }
                    else {
                        errors.message = 'The email already exists';
                        res.locals.errors = errors;;
                        return res.render('register')
                    }
                }).catch(function (err) {
                    console.log(err);
                })
          }
           



    },
    
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/')
    },

    showProfileEdit: (req, res) => {
        let id = req.params.id;
        user.findByPk(id).then((result) => {
        return res.render('profile-edit', {usuario : result})
        }).catch((err) => {
            console.log(err);
        });
    },

    updateProfile: (req, res) => {
            let info = req.body;
            let imgPerfil = req.file.filename;
            let usuario = {
                email: info.email,
                nombre: info.nombre,
                apellido: info.apellido,
                foto: imgPerfil,
                users_id : info.users_id
            }
            let filtro = {
                where: {
                    id: req.params.id
                }
            
            }
            if (req.params.id != usuario.users_id) {
                return res.redirect('/profile/login')
            }
            else {
                user.update(usuario, filtro)
            .then((result) => {
                console.log(req.params.id);
                console.log(usuario.users_id);
                req.session.user = result.dataValues;
                return res.redirect('/profile/' + req.params.id)
            }).catch((err) => {

            });
            }
            
    
    },
    follow : (req,res) => {
        let usuarioEnSesion = req.session.user.id;
        let usuarioASeguir = req.params.id;
        let seguimiento = {
            id_usuario_seguidor: usuarioEnSesion,
            id_usuario_seguido: usuarioASeguir
        }
        follower.create(seguimiento, {
            include:
            {
                all: true,
                nested: true
            }
        })
        .then((result) => {
            res.redirect('/profile/' + req.params.id)
        }).catch((err) => {
            
        });
    },
    showFollowers : (req, res) => {
        let filtro = {
            where: 
            [{
                id_usuario_seguido: req.params.id
                    
            }]
            }
        follower.findAll(filtro).then((result) => {
            return res.redirect('/profile/' + req.params.id)
        }).catch((err) => {
            console.log(err);
        });
    },




};

module.exports = profileController;