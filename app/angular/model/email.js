'use strict';

function Email(from, to, subject, content) {
    var self = this;

    this.from = from;
    this.to = to;
    this.subject = subject;
    this.content = content;

    this.erase = function erase() {
        self.from = '';
        self.to = '';
        self.subject = '';
        self.content = '';
    };
}

exports.createEmail = function createEmail(from, to, subject, content) {
    return new Email(from, to, subject, content);
};
