var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var fs = require('fs');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', function(rec, res) {
	res.render('main');
});

app.get('/directions', function(rec, res) {
	res.render('directions');
});

app.get('/reservations', function(rec, res) {
	res.render('reservations');
});

console.log('yeah');

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
