var JobModule = angular.module('JobModule', ['JobService']);

JobModule.controller('JobController', ['$scope','JobFactory', 'loggedIn', '$location', function($scope, JobFactory, loggedIn, $location) {
  console.log(loggedIn);
  if (!loggedIn.data) {
    $location.path('/');
  }

  $scope.findJob = function() {
    JobFactory.get()
    .success(function(data){
      $scope.response = data;
      console.log(data);
    })
    .error(function(error){
      console.log(error);
    });
  };
  $scope.findJob();

  $scope.postJob = function() {
    var jobDetails = {
      title : $scope.jobTitle,
      details: $scope.jobDetails
    }
    JobFactory.post(jobDetails)
    .success(function(data){
      console.log(data);
    })
    .error(function(error){
      console.log(error);
    });
  };
}]);