'use strict';

describe('Controller: StGeorgeRootsCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var StGeorgeRootsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StGeorgeRootsCtrl = $controller('StGeorgeRootsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StGeorgeRootsCtrl.awesomeThings.length).toBe(3);
  });
});
