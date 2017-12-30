// standard modules
var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// local modules
var index = require('./routes/index');
var createCompany = require('./routes/createCompany');


// route and express declartions
var app = express();
var router = express.Router();


//set
app.set('port',3000);
console.log(__dirname);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// handle get requests
app.get('/', index);
app.get('/createCompany',createCompany)

// create server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = router;