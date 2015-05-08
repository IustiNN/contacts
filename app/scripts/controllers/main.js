'use strict';

/**
 * @ngdoc function
 * @name fullstackApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fullstackApp
 */
angular.module('fullstackApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
