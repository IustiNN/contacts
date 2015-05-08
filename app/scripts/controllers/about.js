'use strict';

/**
 * @ngdoc function
 * @name fullstackApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fullstackApp
 */
angular.module('fullstackApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
