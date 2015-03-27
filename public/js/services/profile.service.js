var ProfileService = angular.module('ProfileService', []);

ProfileService.factory('ProfileFactory', ['$http', function($http) {
  return {
    //function to get all the users
    get: function(id) {
      return $http.get('/api/users/', id);
    }
    // post: function(jobInfo){
    //   return $http.post('/j', jonInfo);
    // }
  };
}]);