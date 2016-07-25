'use strict';

describe('Controller: AboutFitnessFunCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var AboutFitnessFunCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutFitnessFunCtrl = $controller('AboutFitnessFunCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutFitnessFunCtrl.awesomeThings.length).toBe(3);
  });
});
