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
    User.findOne({username: username}, function(err, user) {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: 'Incorrect Username'});
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect Password.'});
      }
      return done(null, user);
    });
  }));
};
// passport.use(new LocalStrategy(
//   function(username, password, callback) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return callback(err); }

//       // No user found with that username
//       if (!user) { 
//         return {
//           message: "Incorrect Username or Password"
//         }; 
//       }
//       else {
//         // if the user is found but the password is wrong
//             if (!user.validPassword(password))
//                 return {
//                   message: "Incorrect Username or Password"
//                 }; 

//             // all is well, return successful user
//             return callback(null, user);
//         // Make sure the password is correct
//       //   if (user.validPassword(password), function(err, isMatch) {
//       //     if (err) { return callback(err); }

//       //     // Password did not match
//       //     if (!isMatch) { return callback(null, false); }

//       //     // Success
//       //     return callback(null, user);
//       //   });
//       // }
//     };
//   });
// }));


// exports.isAuthenticated = passport.authenticate('basic', { session : false });