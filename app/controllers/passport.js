// Load required packages
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user.model');


module.exports = function() {
  passport.serializeUser(function(user, done) {
      done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });

  passport.use(new LocalStrategy(function(username, password, done) {
      User.findOne({
          username: username
      }, function(err, user) {
          if (err) return done(err);
          if (!user) {
              return done(null, false, {
                  message: 'Incorrect Username'
              });
          }
          if (!user.validPassword(password)) {
              return done(null, false, {
                  message: 'Incorrect Password.'
              });
          }
          return done(null, user);
      });
  }));
};
