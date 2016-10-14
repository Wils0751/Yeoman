'use strict';

/**
 * @ngdoc overview
 * @name yeomanAssignmentApp
 * @description
 * # yeomanAssignmentApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanAssignmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/Shannon', {
        templateUrl: 'views/Shannon.html',
        controller: 'ShannonCtrl',
        controllerAs: 'Shannon'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
