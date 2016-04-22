'use strict';

/**
 * @ngdoc overview
 * @name meikaiAppApp
 * @description
 * # meikaiAppApp
 *
 * Main module of the application.
 */
var app = angular
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
        controllerAs: 'main',
        routeName: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        routeName: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact',
        routeName: 'contact',
      })
      .when('/study', {
        templateUrl: 'views/study.html',
        controller: 'StudyCtrl',
        controllerAs: 'study',
        routeName: 'study'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  app.run(function($rootScope){
     $rootScope.$on('$routeChangeStart', function (evt, next, currentRoute) {
          $rootScope.isActive = next.$$route.routeName;
          console.log($rootScope.isActive)
     });
  })
