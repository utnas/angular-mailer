angular.module('EmailDirectives', [])
    .directive('mailContent', function () {
        return {
            restrict: 'E',
            template: '<div class="well"><h1>{{email.subject}}</h1><p><label>Id:</label><span>{{email.id}}</span></p><p><label>From: </label><span>{{email.from}}</span></p><p><label>To: </label><span>{{email.to}}</span></p><p><label>Date: </label><span>{{email.date | date:\'dd/MM/yyyy HH:mm\'}}</span></p></div><p>{{email.content}}</p>',
            scope: {
                email: "="
            }
        };
    })
;