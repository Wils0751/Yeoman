'use strict';

describe('Controller: ShannonCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanAssignmentApp'));

  var ShannonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShannonCtrl = $controller('ShannonCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShannonCtrl.awesomeThings.length).toBe(3);
  });
});
