

suite('Mailer', function () {
    setup(function () {
        var app = angular.module('MailServiceMock', []);
        var injector = angular.injector(['MailServiceMock', 'ng']);
        var service = injector.get('mailService');
    });

    suite('mailService', function () {
        test('should return correct value', function () {
            // perform test with an instance of service here
        });
    });
});