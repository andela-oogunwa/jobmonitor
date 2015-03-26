var User = require('../models/user.model');
var passport = require('passport');

var UserCRUD = {

  signup: function(req, res, next) {

  var user = new User();

    user.firstName = req.body.firstName;
    user.username = req.body.username; 
    user.lastName = req.body.lastName;
    user.password = user.generateHash(req.body.password);
    user.email = req.body.email;
    user.secret_question = req.body.secret_question;
    user.answer_to_question = req.body.answer_to_question;
    user.date_of_birth = req.body.date_of_birth;
    user.is_admin = req.body.is_admin;

    user.save(function(err, user) {
      if (err) {
        res.send(err);
      } else {
        user.password = undefined;
        req.login(user, function(err) {
          if (err) {
            res.status(400).send(err);
          } else {
            res.json(user);
          }
        });
        // res.json(user);
      } 
      // next();
    });
  },

  login: function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err || !user) {
        res.status(400).send(info);
      } else {
        user.password = undefined;
        req.login(user, function(err) {
          if (err) {
            res.status(400).send(err);
          } else {
            console.log(1, req.user);
            res.json(user);
          }
        });
      }
    })(req, res, next);
  },

  logout: function(req, res) {
    console.log(2, req.user);
    req.logout();
    console.log(3, req.user);
    res.redirect('/');
  },

  findAllUsers: function(req, res, next) {

    User.find(function(err, data) {
      if (err) {
        res.send(err);
      }

      else{
        res.json(data);
      }
      next();
    });
  },

  getSingleUser: function(req, res, next) {

    User.findById(req.params.user_id, function(err, data) {
      if (err) {
        res.send(err);
      }

      else{
        res.json(data);
      } 
      next();
    });
  },

  updateUser: function(req, res, next) {

    User.findById(req.params.user_id, function(err, user) {
      if (err) {
        res.send(err);
      }

      //check if user does not exist
      else if (user === null) {
        res.json({message: 'User does not exist'})
      }

      //update all user info
      else{
        user.username = req.body.username;
        user.password = req.body.password;
        user.secret = req.body.secret;

        //save the user info
        user.save(function(err) {
          if (err) {
            res.send(err);
          }

          else{
            res.json(user);
          } 
          next();
        });
      }    
    });
  },

  deleteUser: function(req, res, next) {

    User.findById(req.params.user_id, function(err, user) {
      if (err) {
        res.send(err);
      }

      //check if user does not exist
      else if (user === null) {
        res.json({message: 'User does not exist'})
      }

      //else delete the user
      else {
        user.remove(function(err){
          if (err) {
            res.send(err);
          }

          res.json({ message: 'Successfully deleted' });
          next();
        });
      }
    });
  },

  isAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.status(401).send({message: 'User is not logged in'});
    }
    next();
  },
  isLoggedIn: function(req, res) {
    console.log('checking status');
    console.log(req.user);
    res.json(req.user);
  }
};

module.exports = UserCRUD;
