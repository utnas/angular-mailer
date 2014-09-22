var emailModule = require('../../../app/scripts/model/email');
describe('Email validation', function () {

    describe('Email creation', function () {
        it('should create a new email', function () {
            var newEmail = emailModule.createEmail('Me', 'You', 'Together', 'Forever');
            assert.equal(newEmail.from, 'Me');
            assert.equal(newEmail.to, 'You');
            assert.equal(newEmail.subject, 'Together');
            assert.equal(newEmail.content, 'Forever');
        });
    });
    describe('Erase email\'s fields', function () {
        it('should erase the fields of the email', function () {
            var newEmail = emailModule.createEmail('Me', 'You', 'Together', 'Forever');
            newEmail.erase();
            assert.equal(newEmail.from, undefined);
            assert.equal(newEmail.to, undefined);
            assert.equal(newEmail.subject, undefined);
            assert.equal(newEmail.content, undefined);
        });
    });
});

var assert = require('assert');
