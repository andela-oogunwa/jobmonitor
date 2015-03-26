var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
  topic: String,
  details: String,
  createdAt: { type:Date, default: Date.now },
  comments: String
});

module.exports = mongoose.model('Comments', commentSchema);