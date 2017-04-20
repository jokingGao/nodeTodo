var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');


app.use('/assets', express.static(__dirname, '/public'));

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

mongoose.connect(config.dbConnectString());

app.listen(port);