'use strict';

/**
 * @ngdoc overview
 * @name meikaiAppApp
 * @description
 * # meikaiAppApp
 *
 * Main module of the application.
 */
angular
  .module('meikaiAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/study', {
        templateUrl: 'views/study.html',
        controller: 'StudyCtrl',
        controllerAs: 'study'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
