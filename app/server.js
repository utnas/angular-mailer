var http = require('http'),
    express = require('express'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser'),
    api = require('./api/api.js'),
    PORT = 3223,
    app = express();

var send404 = function (res) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page not found</h1>');
};

app.use(serveStatic(__dirname + '/'));

http.createServer(app).listen(PORT);

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.redirect('/mailer.html');
    console.log('Request from :\'' + req.url + '\' redirected to route login');
});
// API
app.use("/app/api", api);

console.log('The server is started on port ' + PORT);