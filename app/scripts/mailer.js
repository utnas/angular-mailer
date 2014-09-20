'use strict';

angular.module('Mailer', [])
    .controller('MainController', function ($scope) {

        $scope.folders = [
            { value: "MAILBOX", label: 'Mail box', emails: [
                { id: 1, from: "Albator", to: "Rudy", subject: "I will be back", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                { id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Hello from", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
                { id: 3, from: "Pikachu", to: "Rudy", subject: "Pika pika !", date: "15/03/2014", content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
                { id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc", date: "13/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
            ]  },
            { value: "TRASH", label: "Trash", emails: [
                { id: 5, from: "Candy", to: "Rudy", subject: "Happy birthday", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                { id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
                { id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Came back", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
            ]  },
            { value: "SENTS", label: "Sents", emails: [
                { id: 8, from: "Rudy", to: "Albator", subject: "How are you ?", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                { id: 9, from: "Rudy", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
            ] },
            { value: "SPAM", label: "Spam", emails: [
                { id: 10, from: "Rue du discount", to: "Rudy", subject: "Send me a mail ?", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                { id: 11, from: "Sofinnoga", to: "Rudy", subject: "I need money ?", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
            ] }
        ];

        $scope.currentFolder = null;
        $scope.selectedEmail = null;

        $scope.selectFolder = function (folder) {
            $scope.currentFolder = folder;
            $scope.selectedEmail = null;
        };

        $scope.selectEmail = function (email) {
            $scope.selectedEmail = email;
        };

        $scope.fieldSort = null;
        $scope.sortDown = false;
        $scope.sortBySender = function () {
            if ($scope.fieldSort == 'from') {
                $scope.sortDown = !$scope.sortDown;
            } else {
                $scope.fieldSort = 'from';
                $scope.sortDown = false;
            }
        };
        $scope.sortByReceiver = function () {
            if ($scope.fieldSort == 'to') {
                $scope.sortDown = !$scope.sortDown;
            } else {
                $scope.fieldSort = 'to';
                $scope.sortDown = false;
            }
        };
        $scope.sortBySubject = function () {
            $scope.fieldSort = 'subject';
        };
        $scope.sortByDate = function () {
            $scope.fieldSort = 'date';
        };
    });