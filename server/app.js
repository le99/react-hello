var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var apiRouter = require('./src/api/routes');

const inDirs = fs.readdirSync(path.join(__dirname, 'config'), { withFileTypes: true });
console.log(inDirs);
const file = fs.readFileSync(path.join(__dirname, 'config','test.txt'), 'utf8');
console.log(file);


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', apiRouter);

app.get('/*', (req, res) => {
  res.sendfile(path.join(__dirname, './public', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  let message = err.message;
  let error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({'error': {status: error.status, stack: error.stack}});
});

module.exports = app;
