(function () {
    'use strict';

    angular.module('EmailDirective', [])
        .directive('templateHeader', function () {
            return {
                restrict: 'E',
                template: '<section class="fit-borders"><h1> Smart Mailer</h1><section><h4><small><em>Because people make mistakes when tey write an email.<br/>The SmartBox will store the email during 3 minutes and will send it automatically. </em> </small> </h4> </section> </section>'
            };
        })
        .directive('mailContent', function () {
            return {
                restrict: 'E',
                template: '<div class="well"><h1>{{email.subject}}</h1><p><label>Id:</label><span>{{email.id}}</span></p><p><label>From: </label><span>{{email.from}}</span></p><p><label>To: </label><span>{{email.to}}</span></p><p><label>Date: </label><span>{{email.date | date:\'dd/MM/yyyy HH:mm\'}}</span></p></div><p>{{email.content}}</p>',
                scope: {
                    email: "="
                }
            };
        })
        .directive('newEmail', function () {
            return {
                restrict: 'E',
                template: ''
            };
        });
})();