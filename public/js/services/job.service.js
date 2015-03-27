var JobService = angular.module('JobService', []);

JobService.factory('JobFactory', ['$http', function($http) {

  var Jobs = {
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

    postJob: function(jobInfo) {
      console.log('info: ', jobInfo);
      return $http.post('/api/jobs', jobInfo);
    }
  };

  return Jobs;

}]);

