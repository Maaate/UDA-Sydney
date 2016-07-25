'use strict';

describe('Controller: TimetableOurClassesCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var TimetableOurClassesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimetableOurClassesCtrl = $controller('TimetableOurClassesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TimetableOurClassesCtrl.awesomeThings.length).toBe(3);
  });
});
