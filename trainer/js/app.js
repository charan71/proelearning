angular.module('trainer', ['ngRoute', 'ngAnimate', 'routes', 'controllers', 'services', 'filters'])

/* Resolve Views Scroll Point Issue, Title */
.run(['$rootScope', '$document', function($rootScope, $document) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
    });
}])

;
