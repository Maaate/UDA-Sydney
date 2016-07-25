'use strict';

describe('Controller: AboutOurTeamCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var AboutOurTeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutOurTeamCtrl = $controller('AboutOurTeamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutOurTeamCtrl.awesomeThings.length).toBe(3);
  });
});
