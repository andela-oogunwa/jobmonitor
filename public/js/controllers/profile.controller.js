var ProfileModule = angular.module('ProfileModule', ['ProfileService']);

ProfileModule.controller('ProfileController', ['$scope','ProfileFactory', function($scope, ProfileFactory) {

  $scope.findProfile = function() {
    ProfileFactory.get()
    .success(function(data){
      $scope.response = data;
      console.log(data);
    })
    .error(function(error){
      console.log(error);
    });
  };
  $scope.findProfile();
}]);