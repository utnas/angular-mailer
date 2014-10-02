var http = require('http');
var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var PORT = 3223;

var send404 = function (res) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page not found</h1>');
};

var app = express();

app.use(serveStatic(__dirname + '/'));

http.createServer(app).listen(PORT);

// API

var api = express();

// Get Folders
//GET /api/folders
api.get('/folders', function (req, res) {
    res.send(
        {}
    );
});

// Get a folder
//GET /api/folders/idFolder
api.get('/folders/:idFolder', function (req, res) {
    res.send(
        {}
    );
});

// Get Email
// GET /api/folders/folderId/idMail
api.get('/folders/:idFolder/:idEmail', function (req, res) {
    res.send(
        {}
    );
});

app.use(bodyParser.json());

// Send email
// POST /api/send
api.post('/send', function (req, res) {
    res.send({succes: true, email: req.body});
});

app.use("/api/", api);