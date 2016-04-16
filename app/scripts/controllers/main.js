'use strict';

/**
 * @ngdoc function
 * @name meikaiAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meikaiAppApp
 */
angular.module('meikaiAppApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var kanjisInStore = localStorageService.get('kanjis');

    $scope.kanjis = kanjisInStore || [];

    $scope.$watch('kanjis', function () {
      localStorageService.set('kanjis', $scope.kanjis);
    }, true);

    $scope.addKanji = function () {
      $scope.kanjis.push($scope.kanji);
      $scope.kanji = '';
    };
    $scope.removeKanji = function (index) {
      $scope.kanjis.splice(index, 1);
    };
  });
