'use strict';

var phoneApp = angular.module('phoneApp', [
  'angular.filter',
  'ngRoute',
  'appControllers'
]);

// Routh provider for different pages. 
phoneApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/list.html',
    controller: 'listController'
  }).
	when('/details/:phoneId', {
    templateUrl: 'partials/details.html',
    controller: 'detailsController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);