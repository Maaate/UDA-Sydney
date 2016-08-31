'use strict';

/**
 * @ngdoc overview
 * @name udaApp
 * @description
 * # udaApp
 *
 * Main module of the application.
 */
angular
    .module('udaApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider) {//, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about/experience-uda', {
                templateUrl: 'views/about/experience-uda.html',
                controller: 'ExperienceUdaCtrl',
                controllerAs: 'about/experienceUda'
            })
            .when('/about/st-george-roots', {
                templateUrl: 'views/about/st-george-roots.html',
                controller: 'StGeorgeRootsCtrl',
                controllerAs: 'about/stGeorgeRoots'
            })
            .when('/about/our-facilities', {
                templateUrl: 'views/about/our-facilities.html',
                controller: 'AboutOurFacilitiesCtrl',
                controllerAs: 'about/ourFacilities'
            })
            .when('/links', {
                templateUrl: 'views/links.html',
                controller: 'LinksCtrl',
                controllerAs: 'links'
            })
            .when('/about/japan-brazil-sydney', {
                templateUrl: 'views/about/japan-brazil-sydney.html',
                controller: 'AboutJapanBrazilSydneyCtrl',
                controllerAs: 'about/japanBrazilSydney'
            })
            .when('/about/our-team', {
                templateUrl: 'views/about/our-team.html',
                controller: 'AboutOurTeamCtrl',
                controllerAs: 'about/ourTeam'
            })
            .when('/about/street-wise', {
                templateUrl: 'views/about/street-wise.html',
                controller: 'AboutStreetWiseCtrl',
                controllerAs: 'about/streetWise'
            })
            .when('/about/fitness-fun', {
                templateUrl: 'views/about/fitness-fun.html',
                controller: 'AboutFitnessFunCtrl',
                controllerAs: 'about/fitnessFun'
            })
            .when('/about/ultimate-lifestyle', {
                templateUrl: 'views/about/ultimate-lifestyle.html',
                controller: 'AboutUltimateLifestyleCtrl',
                controllerAs: 'about/ultimateLifestyle'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
            .when('/media', {
                templateUrl: 'views/media/index.html',
                controller: 'MediaCtrl',
                controllerAs: 'media'
            })
            .when('/rankings', {
                templateUrl: 'views/rankings.html',
                controller: 'RankingsCtrl',
                controllerAs: 'rankings'
            })
            .when('/timetable/our-classes', {
                templateUrl: 'views/timetable/our-classes.html',
                controller: 'TimetableOurClassesCtrl',
                controllerAs: 'timetable/ourClasses'
            })
            .when('/timetable/timetable', {
                templateUrl: 'views/timetable/timetable.html',
                controller: 'TimetableTimetableCtrl',
                controllerAs: 'timetable/timetable'
            })
            .when('/about/instructor/:param1', {
                templateUrl: 'views/about/instructor.html',
                controller: 'AboutInstructorCtrl',
                controllerAs: 'instructorCtrl'
            })
            .when('/media/photo-gallery/:param1', {
                templateUrl: 'views/media/photo-gallery.html',
                controller: 'MediaPhotoGalleryCtrl',
                controllerAs: 'photoGalleryCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        //$locationProvider.html5Mode(true);
    }]);
