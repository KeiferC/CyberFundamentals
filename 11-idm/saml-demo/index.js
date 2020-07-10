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
// source: https://github.com/bergie/passport-saml
var samlStrategy = new saml.Strategy(
    {   // config options here
        callbackUrl: 'http://localhost/login/callback',
        entryPoint: 'http://localhost:8080/simplesaml/saml2/idp/SSOService.php',
            // IdP url to send SAML request
            // docker config `SIMPLESAMLPHP_SP_ASSERTION_CONSUMER_SERVICE`
        issuer: 'saml-poc', // globally unique identifier for app
            // docker config `SIMPLESAMLPHP_SP_ENTITY_ID`
        identifierFormat: null, // format requested from IdP
        cert: fs.readFileSync(__dirname + '/certs/idp_key.pem', 'utf8'),
            // public key from IdP
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

app.get('/login',
    function (req, res, next) {
        console.log('-----------------------------');
        console.log('/Start login handler');
        next(); // calls next handler `passport.authenticate`
    },
    passport.authenticate('samlStrategy'), // redirects to IdP
        // posts reponses to `login/callback` handler
        // handler defined in SAML config
);

// Used for communicating internal details between SP and IdP
// e.g. sharing app public key
app.get('/metadata',
    function (req, res) {
        res.type('application/xml');
        res.status(200).send(
            samlStrategy.generateServiceProviderMetadata(
                fs.readFileSync(__dirname + '/certs/cert.pem', 'utf8'),
                fs.readFileSync(__dirname + '/certs/cert.pem', 'utf8')));
    }
);

app.post('/login/callback',
    function (req, res, next) {
        console.log('-----------------------------');
        console.log('/Start login callback ');
        next();
    },
    passport.authenticate('samlStrategy'),
    function (req, res) {
        console.log('-----------------------------');
        console.log('login call back dumps');
        console.log(req.user);
        console.log('-----------------------------');
        res.send('Log in Callback Success');
    }
);


// Server Setup
var server = app.listen(4300, 
    function () {
        console.log('Listening on port %d', server.address().port);
    }
);

