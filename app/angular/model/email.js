(function () {
    'use strict';

    function Email(from, to, subject, content) {
        var self = this;

        self.from = from;
        self.to = to;
        self.subject = subject;
        self.content = content;
        self.status = '';

        self.erase = function erase() {
            self.from = '';
            self.to = '';
            self.subject = '';
            self.content = '';
            self.status = '';
        };
    }

    exports.createEmail = function createEmail(from, to, subject, content) {
        return new Email(from, to, subject, content);
    };
})();
