var express = require('express');

var router = express.Router();
var User = require('../controllers/user.controller');
var Job = require('../controllers/job.controller');

//create new job
router.post('/jobs', Job.createJob);

// get list of jobs in the database 
router.get('/jobs/recent', User.isAuthenticated, Job.findAllJobs);

//get a single job
router.get('/jobs/:job_id', Job.getSingleJob);

// router.get('/jobs/recent_jobs', Job.getRecentJobs);

//Edits and updates job's info
router.put('/jobs/:job_id', Job.updateJob);

//Deletes jobs's info
router.delete('/jobs/:job_id', Job.deleteJob);

// router.get('*', function(req, res) {
//     res.sendFile('../../public/views/index.html'); // load our public/index.html file
// });


module.exports = router;