var LoginService = angular.module('LoginService', []);

LoginService.factory('LoginFactory', ['$http', function($http) {

  var User = {
    login: function(data) {
      return $http.post('/api/login', data);
    },

    getProfile: function(id) {
      return $http.get('/api/users/', id);
    }
  };

  return User;
}]);