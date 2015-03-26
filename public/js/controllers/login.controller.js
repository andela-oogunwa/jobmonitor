var LoginModule = angular.module('LoginModule', ['LoginService']);

LoginModule.controller('LoginController', ['$scope','LoginFactory', function($scope, LoginFactory) {

  $scope.login = function(){
    var userDetails = {
      username: $scope.username,
      password: $scope.password,
    };
    LoginFactory.login(userDetails)
    .success(function(data){
      $scope.response = data;
      console.log(data);

    })
    .error(function(error){
      console.log(error);
    });
  };

}])