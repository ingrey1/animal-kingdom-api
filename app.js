var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var animals = require('./routes/animals');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/animals', animals);

module.exports = app;
