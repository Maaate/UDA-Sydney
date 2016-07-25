'use strict';

describe('Controller: AboutInstructorCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var AboutInstructorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutInstructorCtrl = $controller('AboutInstructorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutInstructorCtrl.awesomeThings.length).toBe(3);
  });
});
