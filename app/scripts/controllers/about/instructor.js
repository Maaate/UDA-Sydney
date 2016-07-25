'use strict';

/**
 * @ngdoc function
 * @name udaApp.controller:AboutInstructorCtrl
 * @description
 * # AboutInstructorCtrl
 * Controller of the udaApp
 */
angular.module('udaApp')
  .controller('AboutInstructorCtrl',  function ($scope, $routeParams, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var self = this;
    self.body = null;

    self.instructor = null;

    console.log("the value is " + $routeParams.param1);
    $http.get("/json/instructor/" + $routeParams.param1 + ".json")
      .then(function(response) {
        self.instructor = response.data;
      });
  });
