const express = require('express');
const bodyParser = require('body-parser');

// 
const app = express();

// parse application/json
app.use(bodyParser.json());

// Bootstrap application settings
require('./config/express')(app);

/**
 * entry point for the web app
 */
app.get('/', (req, res) => {
  res.render('index');
});


module.exports = app;
