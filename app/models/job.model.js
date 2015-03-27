var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var jobSchema = new Schema({
  title: {
    type: String,
    // required: true
  },
  expiration_date: {
    type: Date,
    // required: true
  },
  createdAt: { type:Date, default: Date.now },
  details: {
    type: String,
    // required: true
  },
  company: {
    type: String,
    // required: true
  },
  position: {
    type: String,
    // required: true
  },
  location: {
    type: String,
    // required: true
  },
  categories: {
    type: Array
  }
});

module.exports = mongoose.model('Jobs', jobSchema);