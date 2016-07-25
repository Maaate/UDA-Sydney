'use strict';

/**
 * @ngdoc function
 * @name udaApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the udaApp
 */
angular.module('udaApp')
  .controller('NavigationCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isActive = function (viewLocation) {
      return  $location.path().startsWith(viewLocation);
    };

    $scope.isHomepage = function() {
      return $location.path() === '/';
    };
  });
