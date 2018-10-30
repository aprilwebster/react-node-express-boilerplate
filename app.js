const express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan');

// create the app
const app = express();

// parse application/json
app.use(bodyParser.json());

// configure morgan http logging
app.use(morgan('dev'));

// bootstrap application settings
require('./config/express')(app);

/**
 * entry point for the web app
 */
app.get('/', (req, res) => {
  res.render('index');
});



module.exports = app;
