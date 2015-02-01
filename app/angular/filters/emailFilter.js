(function () {
    angular.module('EmailFilter', [])
        .filter('highlightingSearch', function () {
            return function (input, search) {
                if (input) {
                    return input.replace(new RegExp('(' + search + ')', 'gi'), "<span class='highlighting' >$1</span>");
                }
                return input;
            };
        });
})();