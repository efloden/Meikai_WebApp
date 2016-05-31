'use strict';

/**
 * @ngdoc function
 * @name meikaiAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meikaiAppApp
 */
angular.module('meikaiAppApp')
  .controller('MainCtrl', function ($scope, $http, localStorageService) {
    var samplecards = [];
    $http.get('samplecards.json').success(function (data){
        samplecards = data;
    });
    var kanjisInStore = localStorageService.get('kanjis');
    $scope.correct = 0;
    $scope.incorrect = 0;
    $scope.attempts = 0;
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

    $scope.checkKanji = function(kindex, lindex) {
      if (kindex == lindex) {
        $scope.correct++;
      } else {
        $scope.incorrect++;
      }
      $scope.attempts++;
    }
    $scope.generatejson = function() {
      var log = [];
      angular.forEach(samplecards, function(value, key) {
        $scope.kanjis.push(value.kanji + ' ' + value.reading + ' ' + value.meaning);
      }, log)
      $scope.kanji = '';
    }


  });
