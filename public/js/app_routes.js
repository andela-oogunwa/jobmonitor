var routeApp = angular.module('routeApp', []);

routeApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '../views/home.html',
      controller: 'HomeController'
    }).
    when('/jobs', {
      templateUrl: '../views/jobs.html',
      controller: 'JobController',
      resolve: {
        loggedIn: function($http) {
          return $http.get('/api/isloggedin');
        }
      }
    }).
    when('/jobs/:job', {
      templateUrl: '../views/job_details.html',
      controller: 'JobDetailsController'
    }).
    when('/signup', {
      templateUrl: '../views/signup.html',
      controller: 'SignupController'
    }).
    when('/login', {
      templateUrl: '../views/login.html',
      controller: 'LoginController'
    }).
    when('/users', {
      templateUrl: '../views/users.html',
      controller: 'UserController'
    }).
    when('/users/:user', {
      templateUrl: '../views/user_details.html',
      controller: 'UserDetailsController'
    }).
    when('/profile', {
      templateUrl: '../views/profile.html',
      controller: 'JobController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);