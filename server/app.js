var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require("mongoose");
// mongoose.connect =('mongodb://localhost:27017/projects');

var dbURL = require("./mongoose-prop").DB_URL;
mongoose.connect(dbURL);
//step#5
mongoose.connection.on("connected", () => {
  console.log("mongodb connected using mongoose");
});
 mongoose.connect = ('mongodb://127.0.0.1:27017/projects/students');

//  const mongoDB ="mongodb://127.0.0.1/projects/students";
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// // Get the default connection
// const db = mongoose.connection;

// // Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

var studentModel = require("./models/student-model");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var studentsRouter = require('./routes/students');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/students', studentsRouter);

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

module.exports = app;
