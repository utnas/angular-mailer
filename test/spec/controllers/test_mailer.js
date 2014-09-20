'use strict';

describe('Unit: MainController', function () {
    beforeEach(module('Mailer'));

    var ctrl, scope;
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('MainController', {
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello', function () {
        expect(scope.selectFolder('MAILBOX').label).toEqual("Hello Ari");
    });
});