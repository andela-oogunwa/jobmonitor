var express = require('express');

var router = express.Router();

var Comment = require('../controllers/comment.controller');

//create new comment
router.post('/comments', Comment.createComment);

// get list of comments in the database
router.get('/comments', Comment.findAllComments);

//get a single comment
router.get('/comments/:comment_id', Comment.getSingleComment);

//Edits and updates comment's info
router.put('/comments/:comment_id', Comment.updateComment);

//Deletes comment's info
router.delete('/comments/:comment_id', Comment.deleteComment);

// router.get('*', function(req, res) {
//     res.sendFile('../../public/views/index.html'); // load our public/index.html file
// });

module.exports = router;