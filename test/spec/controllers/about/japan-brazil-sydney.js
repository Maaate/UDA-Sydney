'use strict';

describe('Controller: AboutJapanBrazilSydneyCtrl', function () {

  // load the controller's module
  beforeEach(module('udaApp'));

  var AboutJapanBrazilSydneyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutJapanBrazilSydneyCtrl = $controller('AboutJapanBrazilSydneyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutJapanBrazilSydneyCtrl.awesomeThings.length).toBe(3);
  });
});
