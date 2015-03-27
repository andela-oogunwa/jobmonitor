var LoginModule = angular.module('LoginModule', ['LoginService']);

LoginModule.controller('LoginController', ['$rootScope', '$scope','LoginFactory', '$location',
  function($rootScope, $scope, LoginFactory, $location) {

  $scope.login = function(){
    var userDetails = {
      username: $scope.username,
      password: $scope.password,
    };

    LoginFactory.login(userDetails)
    .success(function(data){
      $rootScope.response = data;
      // console.log('response: ', $rootScope.response);
      $location.path('/profile');
    })
    .error(function(error){
      console.log(error);
    });
  };

}]);