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

http.createServer(app, function () {
    console.log('Server started...');
}).listen(PORT);

app.use(bodyParser.json());

// API
app.use("/app/api", api);