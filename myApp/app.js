var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//RUTAS
const indexRouter = require('./routes/index');
const searchResultsRouter = require('./routes/search-results');
const productRouter = require('./routes/products');
const profileRouter = require('./routes/profile');
const session = require('express-session');
const db = require('./database/models');
const user = db.User


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//CUANDO EL USUARIO REQUIERE / ALGO... 
app.use('/', indexRouter);
app.use('/search-results', searchResultsRouter);
app.use('/products', productRouter);
app.use('/profile', profileRouter);

//Middelware session
app.use(session({
  secret: 'myApp',
  resave: false,
  saveUninitialized: true
}));

//Middelware session
app.use(function (req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user
   
    return next();
  }
  return next();
});

//Middelware cookie
app.use(function (req, res, next) {
  if (req.cookies.user_id != undefined && req.session.user == undefined) {
    let idUsuarioEnCookie = req.session.user_id

    db.User.findByPk(idUsuarioEnCookie)
      .then(function (user) {
        req.session.user = user.dataValues

        res.locals.user = user.dataValues

        return next()

      }).catch(function (err) {
console.log(err);
      })

  } else {

    return next()
  }

})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
