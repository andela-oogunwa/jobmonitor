var UserModule = angular.module('UserModule', ['UserService']);

UserModule.controller('UserController', ['$scope','UserFactory', function($scope, UserFactory) {

$scope.usersList = function() {
    UserFactory.get()
    .success(function(data){
      $scope.users = data;
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

  