var SignupService = angular.module('SignupService', []);

SignupService.factory('SignupFactory', ['$http', function($http) {
  return {
    //function to create a new user
    newUser: function(userInfo) {
      return $http.post('api/users', userInfo);
    }
  }

  //   //function to create a new user
  //   create: function(userInfo) {
  //     return $http.post('/users/new_user', userInfo);
  //   },

  //   //function to get a single user
  //   getSingleUser: function(user_id) {
  //     return $http.get('/users/' + user_id);
  //   },

  //   //function to update a user's info
  //   updateUserInfo: function() {
  //     return $http.update('/users/:user_id');
  //   },

  //   //function to delete a user info
  //   deleteUser: function() {
  //     return $http.delete('/users/:user_id');
  //   }
  // }
}]);