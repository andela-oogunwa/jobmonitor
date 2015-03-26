var ProfileService = angular.module('ProfileService', []);

ProfileService.factory('ProfileFactory', ['$http', function($http) {
  return {
    //function to get all the users
    get: function() {
      return $http.get('/api/users/5510aab2fcf49a005ce9b010');
    }
    // post: function(jobInfo){
    //   return $http.post('/j', jonInfo);
    // }
  }
}]);