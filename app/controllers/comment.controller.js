var Comment = require('../models/comment.model');

var newComment = {

  createComment: function(req, res, next) {

    var commentObj = {
      topic: req.body.topic,
      comments: req.body.comments,
      details: req.body.details
    };

    Comment.create(commentObj, function(err, data) {
      if (err) {
        res.send(err);
      }

      else{
        res.json(data);
      } 
      next();
    });
  },

  findAllComments: function(req, res, next) {

    Comment.find(function(err, data) {
      if (err) {
        res.send(err);
      }

      else {
        res.json(data);
      }
      next();
    });
  },

  getSingleComment: function(req, res, next) {

    Comment.findById(req.params.comment_id, function(err, data) {
      if (err) {
        res.send(err);
      }

      else {
        res.json(data);
      } 
      next();
    });
  },

  updateComment: function(req, res, next) {

    Comment.findById(req.params.comment_id, function(err, comment) {
      if (err) {
        res.send(err);
      }

      //check if comment does not exist
      else if (comment === null) {
        res.json({message: 'Comment does not exist'})
      }

      //update all comment info
      else{
        comment.topic = req.body.topic;
        comment.details = req.body.details;
        comment.comments = req.body.comments;

        //save the comment info
        comment.save(function(err) {
          if (err) {
            res.send(err);
          }

          else{
            res.json(comment);
          } 
          next();
        });
      }    
    });
  },

  deleteComment: function(req, res, next) {

    Comment.findById(req.params.comment_id, function(err, comment) {
      if (err) {
        res.send(err);
      }

      //check if comment does not exist
      else if (comment === null) {
        res.json({message: 'Job does not exist'})
      }

      //else delete the comment
      else {
        comment.remove(function(err){
          if (err) {
            res.send(err);
          }

          res.json({ message: 'Successfully deleted' });
          next();
        });
      }
    });
  }
}

module.exports = newComment;

