'use strict';

describe('Controller: ExperienceUdaCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var ExperienceUdaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExperienceUdaCtrl = $controller('ExperienceUdaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExperienceUdaCtrl.awesomeThings.length).toBe(3);
  });
});
