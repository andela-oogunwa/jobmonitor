var JobModule = angular.module('JobModule', ['JobService']);

JobModule.controller('JobController', ['$scope','JobFactory', 'loggedIn', '$location', function($scope, JobFactory, loggedIn, $location) {
  console.log(loggedIn);
  if (!loggedIn.data) {
    $location.path('/');
  }

  $scope.findJob = function() {
    var searchObject = {};
    searchObject.query = $scope.searchTerm;
    JobFactory.get(searchObject)
    .success(function(data){
      $scope.response = data;
      console.log(data);
    })
    .error(function(error){
      console.log(error);
    });
  };

  var findRecentJobs = function() {
    JobFactory.getRecent()
    .success(function(data){
      $scope.recent_jobs = data;
      console.log(data);
    })
    .error(function(error){
      console.log(error);
    });
  };
  findRecentJobs();

  $scope.postJob = function() {
    var jobDetails = {
      title : $scope.jobTitle,
      details: $scope.jobDetails
    };
    JobFactory.post(jobDetails)
    .success(function(data){
      console.log(data);
    })
    .error(function(error){
      console.log(error);
    });
  };
}]);
