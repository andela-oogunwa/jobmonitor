var UserModule = angular.module('UserModule', ['UserService']);

UserModule.controller('UserController', ['$scope','UserFactory', function($scope, UserFactory) {

  $scope.message = "Few users";
}]);

  