var http = require('http');
var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var api = require('./api/api.js');
var PORT = 3223;

var send404 = function (res) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page not found</h1>');
};

var app = express();

app.use(serveStatic(__dirname + '/'));

http.createServer(app).listen(PORT);

app.use(bodyParser.json());

// API
app.get('/', function (req, res) {
    res.redirect('/mailer.html');
    console.log('Request from :\'' + req.url + '\' redirected to route login');
});
app.use("/app/api", api);

console.log('The server is started on port ' + PORT);