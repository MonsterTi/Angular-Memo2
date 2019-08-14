var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/test', (req, res) => {
  res.json({ user: 'tobi' })
})

app.get('/', (req, res) => {
  //res.json({ user: 'tobi' })
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = app;
