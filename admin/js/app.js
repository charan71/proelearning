(function() {
    "use strict";

    angular.module('admin', ['ngRoute', 'ngAnimate', 'routes', 'controllers', 'services', 'filters', 'directives', 'ds.clock', 'angularUtils.directives.dirPagination'])

    /* Resolve Views Scroll Point Issue, Title */
    .run(['$rootScope', '$document', function($rootScope, $document) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
            $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
        });

        $rootScope.typeOf = function(value) {
            return typeof value;
        };
    }])

    ;
}(angular));