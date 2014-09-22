'use strict';

angular.module('Mailer', ['ngSanitize'])
    .controller('MainController', function ($scope) {

        $scope.folders = [
            { value: "MAILBOX", label: 'Email Box', emails: [
                { id: 1, from: "Albator", to: "Rudy", subject: "I will be back", date: new Date(2014, 2, 20, 15, 30), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                { id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Kiss from sky", date: new Date(2014, 3, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
                { id: 3, from: "Pikachu", to: "Rudy", subject: "Pika pika !", date: new Date(2014, 2, 15, 16, 12), content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
                { id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc", date: new Date(2014, 2, 15, 14, 15), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
            ]  },
            { value: "TRASH", label: "Archives", emails: [
                { id: 5, from: "Candy", to: "Rudy", subject: "Happy birthday", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                { id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
                { id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Do you come", date: new Date(2014, 2, 15, 17, 50), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
            ]  },
            { value: "SENT", label: "Sents", emails: [
                { id: 8, from: "Rudy", to: "Albator", subject: "What price ?", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                { id: 9, from: "Rudy", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
            ] },
            { value: "SPAM", label: "Spams", emails: [
                { id: 10, from: "Rue du discount", to: "Rudy", subject: "Need a new one", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                { id: 11, from: "Sofinnoga", to: "Rudy", subject: "Need money ?", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
            ] }
        ];

        // Selection
        $scope.currentFolder = null;
        $scope.selectedEmail = null;
        $scope.newEmail = null;
        $scope.selectFolder = function (folder) {
            $scope.currentFolder = folder;
            $scope.selectedEmail = null;
            if (folder) {
                $scope.newEmail = null;
            }
        };
        $scope.selectEmail = function (email) {
            $scope.selectedEmail = email;
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
            eraseFields($scope.newEmail);
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
            $scope.newEmail.from = "MySelf";
            $scope.newEmail.id = getNextEmailId();

            $scope.folders.forEach(function (item) {
                if (item.value === "SENT") {
                    item.emails.push($scope.newEmail);
                    $scope.newEmail = null;
                }
            });
        };

        function getNextEmailId() {
            var lastGreatId = 0;
            $scope.folders.forEach(function (item) {
                item.emails.forEach(function (email) {
                    if (email.id > lastGreatId) {
                        lastGreatId = email.id;
                    }
                });
            });
            return lastGreatId + 1;
        }

        function eraseFields(newEmail) {
            if (newEmail) {
                newEmail.from = null;
                newEmail.to = null;
                newEmail.subject = null;
                newEmail.content = null;
            }
        }
    })
    .
    filter('highlightingSearch', function () {
        return function (input, search) {
            if (input) {
                return input.replace(new RegExp('(' + search + ')', 'gi'), "<span class='highlighting' >$1</span>");
            }
            return input;
        };
    });