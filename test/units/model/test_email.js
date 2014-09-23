var emailModule = require('../../../app/scripts/model/email');
var assert = require('assert');

'use strict';

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
            assert.equal(newEmail.from, '');
            assert.equal(newEmail.to, '');
            assert.equal(newEmail.subject, '');
            assert.equal(newEmail.content, '');
        });
    });
});