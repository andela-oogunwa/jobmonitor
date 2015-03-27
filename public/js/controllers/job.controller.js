var JobModule = angular.module('JobModule', ['JobService']);

JobModule.controller('JobController', ['$scope','JobFactory', '$location', 
  function($scope, JobFactory, $location) {

  $scope.findJob = function() {
    var searchObject = {};
    searchObject.query = $scope.searchTerm;
    JobFactory.get(searchObject)
    .success(function(data){
      $scope.response = data;
      // console.log(data);
    })
    .error(function(error){
      console.log(error);
    });
  };

  $scope.findRecentJobs = function() {
    JobFactory.getRecent()
    .success(function(data){
      $scope.recent_jobs = data;
      console.log(data);
    })
    .error(function(error){
      console.log(error);
    });
  };

  $scope.addJob = function() {
    var jobDetails = {
      title : $scope.title,
      details: $scope.details
    };
    console.log("ghgdhhdsj");
    JobFactory.postJob(jobDetails)
      .success(function(data){
        console.log(data);
      })
      .error(function(error){
        console.log(error);
    });
  };
}]);
