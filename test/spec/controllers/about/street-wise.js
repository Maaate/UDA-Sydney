'use strict';

describe('Controller: AboutStreetWiseCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var AboutStreetWiseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutStreetWiseCtrl = $controller('AboutStreetWiseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutStreetWiseCtrl.awesomeThings.length).toBe(3);
  });
});
