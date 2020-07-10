// Imports
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// Express App Instance
var app = express();

app.use(cookieParser()); // for determining if user is authenticated or not

app.use(bodyParser.urlencoded({extended: false}));
    // parses `application/x-www/form-urlencoded`
app.use(bodyParser.json()); // parses JSON

app.use(session({secret: 'secret', // used for signing sessionID cookie
                 resave: false,
                 saveUnitialized: true}));
    // session setup

// RESTful API
app.get('/', 
    function (req, res) {
        res.send('SAML Demo - SP Home Page');
    }
);

// Server Setup
var server = app.listen(4300, 
    function () {
        console.log('Listening on port %d', server.address().port);
    }
);
