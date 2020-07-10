// Imports
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var passport = require('passport');
var saml = require('passport-saml');
var fs = require('fs'); // filesystem access for loading certs from disk


// Express App Instance
var app = express();


// SAML Setup
var samlStrategy = new saml.Strategy(
    {   // config options here
        callbackUrl: 'http://localhost/login/callback',
        entryPoint: 'http://localhost:8080/simplesaml/saml2/idp/SSOService.php',
            // IdP url to send SAML request
            // docker config `SIMPLESAMLPHP_SP_ASSERTION_CONSUMER_SERVICE`
        issuer: 'saml-poc', // globally unique identifier for app
            // docker config `SIMPLESAMLPHP_SP_ENTITY_ID`
        identifierFormat: null, // format requested from IdP
        decryptionPvK: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
            // private decryption key
        privateCert: fs.readFileSync(__dirname + '/certs/key.pem', 'utf8'),
            // private encryption key
        validateInResponseTo: false, // validates SAML responses
            // currently set to false for simplicity sake
        disableRequestedAuthnContext: true
    }, 
    function (profile, done) { // `done` == callback function
        return done(null, profile);
    }
);


// Passport Setup
passport.serializeUser(
    function (user, done) {
        console.log('-----------------------------');
        console.log('serialize user');
        console.log(user);
        console.log('-----------------------------');
        done(null, user);
    }
);

passport.deserializeUser(
    function (user, done) {
        console.log('-----------------------------');
        console.log('deserialize user');
        console.log(user);
        console.log('-----------------------------');
        done(null, user);
    }
);

passport.use('samlStrategy', samlStrategy);
    

// Express Instance Setup
app.use(cookieParser()); // for determining if user is authenticated or not

app.use(bodyParser.urlencoded({extended: false}));
    // parses `application/x-www/form-urlencoded`
app.use(bodyParser.json()); // parses JSON

app.use(session({secret: 'secret', // used for signing sessionID cookie
                 resave: false,
                 saveUninitialized: true}));
    // session setup

app.use(passport.initialize({}));
app.use(passport.session({})); // middleware that allows for persistent login


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

