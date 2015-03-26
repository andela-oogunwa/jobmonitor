var LoginService = angular.module('LoginService', []);

LoginService.factory('LoginFactory', ['$http', function($http) {
  return {
    //function to get all the jobs
    login: function(data) {
      return $http.post('/api/login', data);
    }
  }
}]);