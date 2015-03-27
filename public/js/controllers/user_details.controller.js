var UserDetailsModule = angular.module('UserDetailsModule', ['UserDetailsService']);

UserDetailsModule.controller('UserDetailsController', ['$scope','$routeParams','UserDetailsFactory',
 function($scope, $routeParams, UserDetailsFactory) {

  $scope.user = $routeParams.user;
  $scope.message = 'Hello ' + $scope.user;
}]);