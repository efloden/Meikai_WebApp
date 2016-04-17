'use strict';

describe('Controller: StudyCtrl', function () {

  // load the controller's module
  beforeEach(module('meikaiAppApp'));

  var StudyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudyCtrl = $controller('StudyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudyCtrl.awesomeThings.length).toBe(3);
  });
});
