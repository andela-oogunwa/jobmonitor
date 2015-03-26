var SignupModule = angular.module('SignupModule', ['SignupService']);

SignupModule.controller('SignupController', ['$scope','SignupFactory', function($scope, SignupFactory) {

  $scope.signup = function(){
    var userDetails = {
      firstName: $scope.firstName,  
      lastName: $scope.lastName,
      username: $scope.username,
      password: $scope.password,
      email: $scope.email
    }

    SignupFactory.newUser(userDetails)
    .success(function(data){
      $scope.response = data;
      console.log(data);
    })
    .error(function(error){
      console.log(error);
    });
  };
}]);


