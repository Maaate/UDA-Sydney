'use strict';

describe('Controller: AboutUltimateLifestyleCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var AboutUltimateLifestyleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutUltimateLifestyleCtrl = $controller('AboutUltimateLifestyleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutUltimateLifestyleCtrl.awesomeThings.length).toBe(3);
  });
});
