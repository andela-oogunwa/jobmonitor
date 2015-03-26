var UserDetailsService = angular.module('UserDetailsService', []);

UserDetailsService.factory('UserDetailsFactory', ['$http', function($http) {
  return {
    //function to get all the users
    get: function() {
      return $http.get('/jobs');
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