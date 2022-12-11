const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const animals = require('./routes/animals');
const dbSetup = require('./routes/setup');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/animals', animals);
app.use('/api/v1/db-table-setup', dbSetup);

module.exports = app;
