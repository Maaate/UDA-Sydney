'use strict';

describe('Controller: AboutOurFacilitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var AboutOurFacilitiesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutOurFacilitiesCtrl = $controller('AboutOurFacilitiesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutOurFacilitiesCtrl.awesomeThings.length).toBe(3);
  });
});
