'use strict';

describe('Controller: TimetableTimetableCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var TimetableTimetableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TimetableTimetableCtrl = $controller('TimetableTimetableCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TimetableTimetableCtrl.awesomeThings.length).toBe(3);
  });
});
