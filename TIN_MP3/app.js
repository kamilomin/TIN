var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var signRouter = require('./routes/sign');
//var usersRouter = require('./routes/users'); // btw czym rozni sie var od const ????
const employeeRouter = require('./routes/employeeRoute');
const departmentRouter = require('./routes/departmentRoute');
const employmentRouter = require('./routes/employmentRoute');
const orderRouter = require('./routes/orderRoute');
const makeOrderEmployeeRouter = require('./routes/makeOrderEmployeeRoute');
const authUtils = require('./backend/util/authUtils');


var app = express();

//Sesja musi byc przed routami 
const session = require('express-session');
app.use(session({
    secret: 'my_secret_password',
    resave: false
}));

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if(!res.locals.loginError) {
      res.locals.loginError = undefined;
  }
  next();
});
//// 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//===================================================
app.use('/', indexRouter);
app.use('/sign', signRouter);
app.use('/employees', authUtils.permitAuthenticatedUser, employeeRouter);
app.use('/departments', authUtils.permitAuthenticatedUser, departmentRouter); //hm jakz robic to po /
app.use('/employments', authUtils.permitAuthenticatedUser, employmentRouter);
app.use('/orders', authUtils.permitAuthenticatedUser,  orderRouter);
app.use('/makeOrderEmployees', authUtils.permitAuthenticatedUser, makeOrderEmployeeRouter);
//authUtils.permitAuthenticatedUserAccessLevel_2

//===================================================
/* jezeli chce lapac errory to musze ulepszyc kod bo teraz blokuja odpowiedzi bazy danych - wiec je wylaczam
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/



//polaczenie z baza danych
const sequelizeInit = require('././backend/config/sequelize/init');
sequelizeInit()
     .catch(err => {
        console.log(err);
     });

////
const empApiRouter = require('././backend/routes/api/EmployeeApiRoute');
app.use('/api/employees', empApiRouter);
///////////////////////










module.exports = app;


