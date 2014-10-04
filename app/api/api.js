var express = require('express');

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


// Send email
// POST /api/send
api.post('/send', function (req, res) {
    res.send({succes: true, email: req.body});
});

module.exports = function () {
    return api;
};