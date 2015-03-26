var Job = require('../models/job.model');

var newJob = {

  createJob: function(req, res, next) {

    var jobObj = {
      title: req.body.title,
      expiration_date: req.body.expiration_date,
      details: req.body.details,
      company: req.body.company,
      position: req.body.position,
      location: req.body.location,
      categories: req.body.categories
    };

    Job.create(jobObj, function(err, data) {
      if (err) {
        res.send(err);
      }

      else{
        res.json(data);
      } 
      next();
    });
  },

  findAllJobs: function(req, res, next) {

    Job.find({title: req.query.query}, function(err, title) {
      if (err) {
        res.send(err);
      }

      else {
        Job.find({company: req.query.query}, function(err, company) {
          if (err) {
            res.send(err);
          }
          else {
            res.json({
              "by_company": company,
              "by_title":title
            });
          }
          // res.json(title);
        });
        
      }
      // next();
    });
  },

  getRecentJobs: function(req, res, next){
    Job.find(function(err, data){
      if (err) {
        res.send(err);
      }
      else {
        res.json(data);
      }
      next();
    });

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

  getSingleJob: function(req, res, next) {

    Job.findById(req.params.job_id, function(err, data) {
      if (err) {
        res.send(err);
      }

      else {
        res.json(data);
      } 
      next();
    });
  },

  updateJob: function(req, res, next) {

    Job.findById(req.params.job_id, function(err, job) {
      if (err) {
        res.send(err);
      }

      //check if user does not exist
      else if (job === null) {
        res.json({message: 'Job does not exist'});
      }

      //update all user info
      else{
        job.title = req.body.title;
        job.details = req.body.details;
        job.timeline = req.body.timeline;

        //save the user info
        job.save(function(err) {
          if (err) {
            res.send(err);
          }

          else{
            res.json(job);
          } 
          next();
        });
      }    
    });
  },

  deleteJob: function(req, res, next) {

    Job.findById(req.params.job_id, function(err, job) {
      if (err) {
        res.send(err);
      }

      //check if user does not exist
      else if (job === null) {
        res.json({message: 'Job does not exist'});
      }

      //else delete the user
      else {
        job.remove(function(err){
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

module.exports = newJob;

