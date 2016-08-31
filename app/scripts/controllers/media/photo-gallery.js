'use strict';

/**
 * @ngdoc function
 * @name udaApp.controller:MediaPhotoGalleryCtrl
 * @description
 * # MediaPhotoGalleryCtrl
 * Controller of the udaApp
 */
angular.module('udaApp')
    .controller('MediaPhotoGalleryCtrl', function ($scope, $routeParams, $http) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var self = this;
        self.gallery = null;

        $http.get("/json/photo-gallery/" + $routeParams.param1 + ".json")
            .then(function (response) {
                self.gallery = response.data;
            });
    });
