var JobService = angular.module('JobService', []);

JobService.factory('JobFactory', ['$http', function($http) {
  return {
    //function to get all jobs
    get: function() {
      return $http.get('/api/jobs');
    },
    post: function(jobInfo) {
      return $http.post('api/jobs', jobInfo);
    }
  }
}]);

