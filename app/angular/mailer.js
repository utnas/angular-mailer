'use strict';

angular.module('Mailer', ['ngSanitize', 'MailServiceMock', 'EmailFilter', 'EmailDirectives'])
    .controller('MainController', function ($scope, mailService) {

        // Selection
        $scope.currentFolder = mailService.getFolder('MAILBOX');
        $scope.selectedEmail = null;
        $scope.newEmail = null;
        $scope.selectFolder = function (folderValue) {
            $scope.currentFolder = mailService.getFolder(folderValue);
            $scope.selectedEmail = null;
            if (folderValue) {
                $scope.newEmail = null;
            }
        };

        $scope.selectEmail = function (folderValue, idEmail) {
            $scope.selectedEmail = mailService.getMail(folderValue, idEmail);
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

        $scope.search = null;
        $scope.filtered = null;

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
            if ($scope.selectedEmail) {
                mailService.deleteEmail($scope.currentFolder.value, $scope.selectedEmail.id);
                $scope.selectedEmail = null;
            }
        };

        $scope.folders = mailService.getFolders();

        function eraseFields() {
            var newEmail = {};
            if (newEmail) {
                newEmail.from = null;
                newEmail.to = null;
                newEmail.subject = null;
                newEmail.content = null;
            }
            return newEmail;
        }
    });