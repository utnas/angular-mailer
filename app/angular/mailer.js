(function () {
    'use strict';

    angular.module('Mailer', ['ngSanitize', 'MailServiceMock', 'EmailFilter', 'EmailDirective'])
        .controller('MainController', function ($scope, mailService) {

            // Selection
            $scope.currentFolder = mailService.getFolder('MAILBOX');
            $scope.selectedEmail = null;
            $scope.newEmail = null;
            $scope.selectedEmails = [];

            $scope.selectFolder = function (folderValue) {
                $scope.currentFolder = mailService.getFolder(folderValue);
                $scope.selectedEmail = null;
                if (folderValue) {
                    $scope.newEmail = null;
                }
            };

            //TODO: Should be moved into the class Email
            function checkUnchecked(email) {
                if (!$scope.selectedEmail) {
                    $scope.selectedEmail = email;
                }
                if ($scope.selectedEmail.status === 'checked') {
                    $scope.selectedEmail.status = '';
                    $scope.selectedEmails.splice($scope.selectedEmails.indexOf(email), 1);
                } else {
                    $scope.selectedEmail.status = 'checked';
                    $scope.selectedEmails.push(email);
                }
            }

            $scope.selectEmail = function (email) {
                if (email) {
                    $scope.displayEmail(email);
                    checkUnchecked(email);
                }
            };

            $scope.displayEmail = function (email) {
                if (email) {
                    $scope.selectedEmail = email;
                }
            };

            // Sorting
            $scope.fieldSort = null;
            $scope.sortDown = false;
            $scope.sortEmail = function (field) {
                if ($scope.fieldSort == field) {
                    $scope.sortDown = !$scope.sortDown;
                } else {
                    $scope.fieldSort = field;
                    $scope.sortDown = false;
                }
            };

            $scope.cssChevronSort = function (field) {
                return {
                    glyphicon: $scope.fieldSort == field,
                    'glyphicon-chevron-up': $scope.fieldSort == field && !$scope.sortDown,
                    'glyphicon-chevron-down': $scope.fieldSort == field && $scope.sortDown
                };
            };

            $scope.eraseSearch = function () {
                $scope.search = null;
            };

            $scope.eraseNewEmail = function () {
                $scope.currentFolder = null;
                $scope.selectedEmail = null;
                $scope.newEmail = eraseFields();
                $scope.formNewEmail.$setPristine();
            };

            $scope.addEmail = function () {
                $scope.selectedEmails = [];
                $scope.eraseNewEmail();
                $scope.newEmail = "";

            };

            $scope.sendEmail = function () {
                var regExpValidEmail = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$', "gi");

                if (!$scope.newEmail.to || !$scope.newEmail.to.match(regExpValidEmail)) {
                    window.alert('Invalid email provided it should looks like foo@fee.ext');
                    return;
                }
                if (!$scope.newEmail.subject || $scope.newEmail.subject === "") {
                    if (!window.confirm("Are you sure to send an email with empty subject ?")) {
                        return;
                    }
                }
                mailService.sendEmail($scope.newEmail, 'MySelf');
                $scope.newEmail = null;
                $scope.currentFolder = mailService.getFolder('MAILBOX');
            };

            $scope.deleteEmail = function () {
                if ($scope.selectedEmails.length > 0) {
                    $scope.selectedEmails.forEach(function (email) {
                        mailService.deleteEmail($scope.currentFolder.value, email.id);
                        $scope.selectedEmail = null;
                        email.status = '';
                    });
                    $scope.selectedEmails = [];
                }
            };

            $scope.folders = mailService.getFolders();

            //private
            var eraseFields = function () {
                return {
                    from: null,
                    to: null,
                    subject: null,
                    content: null
                };
            }
        });
})();