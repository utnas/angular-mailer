var http = require('http');
var fs = require('fs');
var mime = require('mime');
var PORT = 3223;

var sendFile = function (res, url) {
    console.log('Sending file' + url);

    var path = __dirname + '/' + url;

    fs.stat(path, function (err, stats) {
        if (!err && stats.isFile()) {
            var flux = fs.createReadStream(path, {
                flags: 'r',
                autoClose: true
            });
            var mimeType = mime.lookup(path);
            res.writeHead(200, {'Content-Type': mimeType});
            flux.pipe(res);
        } else {
            send404(res);
        }
    });
};

var send404 = function (res) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Page not found</h1>');
};

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(301, {'location': '/mailer.html'});
        res.end();
    } else {
        sendFile(res, req.url);
    }
}).listen(PORT);

console.log('Server started on port' + PORT);