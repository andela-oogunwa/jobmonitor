var JobDetailsModule = angular.module('JobDetailsModule', ['JobDetailsService']);

JobDetailsModule.controller('JobDetailsController', ['$scope','JobDetailsFactory', function($scope, JobDetailsFactory) {

// $scope.findJobs = function() {
    
//       $location.path('../views/profile.html');
//     }
$scope.message ='JOBS Details';
}]);