var JobService = angular.module('JobService', []);

JobService.factory('JobFactory', ['$http', function($http) {
  return {
    //function to get all jobs
    get: function(userInput) {
      return $http({
        method: 'GET',
        url: '/api/jobs',
        params: userInput
      });
    },

    getRecent: function() {
      return $http.get('api/jobs/recent');
    },

    post: function(jobInfo) {
      return $http.post('api/jobs', jobInfo);
    }
  };
}]);

