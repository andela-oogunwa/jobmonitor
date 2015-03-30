//modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var session = require('express-session');
var cookieparser = require('cookie-parser');
var passport = require('passport');
var auth = require('./app/controllers/passport');
// var mongoStore = require('connect-mongo')({session: session});

var app = express();

// configuration ===========================================

// config files
var db = require('./config/db');



// set our port
// var port = process.env.PORT || 8080;
// app.set('port', (process.env.PORT || 8080));
var port = process.env.PORT || 8080; 

// connect to our database
//do not need to save to a variable
// var testCon = mongoose.connect(db.url);
mongoose.connect(db.productionUrl);

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());
app.use(cookieparser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));
// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
//session should be before passport intialize
// app.use(session({secret: 'JobMon'}));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'JobMon'
  // : {secure: true},
  // store: new mongoStore({
  //   url: db.url
  // })
}));
// Use the passport package in our application
app.use(passport.initialize());


app.use(passport.session());
auth();

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));


// ROUTES FOR OUR API
// =============================================================================
var userRoute = require('./app/routes/user.route');
var jobRoute = require('./app/routes/job.route');
var commentRoute = require('./app/routes/comment.route');
// more routes for our API will happen here


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', userRoute);
app.use('/api', jobRoute);
app.use('/api', commentRoute);

// frontend routes =========================================================
// catch all route to handle all angular requests
app.get('*', function(req, res) {
    res.sendFile( __dirname + '/public/index.html'); // load our public/index.html file
});


// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);
                    

// expose app           
exports = module.exports = app;
