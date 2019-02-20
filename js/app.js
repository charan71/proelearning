(function() {
    "use strict";

/* Creating Module */
var app = angular.module('ProELearning', ['ngRoute', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ngStorage', 'ngCookies', 'ngLocale', 'ProELearning.routes', 'ProELearning.controllers', 'ProELearning.services', 'ProELearning.directives', 'ProELearning.filters', 'ng-clamp', 'chart.js', 'ngCountryStateSelect', 'ng-breadcrumbs', 'awesome-rating', 'angularUtils.directives.dirPagination'])

/* Resolve Views Scroll Point Issue */
.run(['$rootScope', '$document', '$http', '$window', '$location', function($rootScope, $document, $http, $window, $location) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        $http.get("http://ipinfo.io/json")
        .then(function(response) {
            $rootScope.shortCountryCode = response.data.country;
            $window.sessionStorage.setItem('shortCountryCode', response.data.country);
        }, function(error) {
            $rootScope.shortCountryCode = "Error occurred while fetching the Geo Location";
        });
        
        // AOS.init();
        $rootScope.title = current.$$route.title;
        $rootScope.description = current.$$route.description;
        $rootScope.keywords = current.$$route.keywords;
        $rootScope.getCanonical = $location.$$protocol + '://' + $location.$$host + $location.$$path;
        $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
    });

    $rootScope.$on("$routeChangeStart", function() {

        // Fetch Website Visits from database
        $http.get("./php/page_visits_fetch.php")
        .then(function(response){
            $rootScope.pageViewNum = response.data;
            $rootScope.pageViewNumInc = parseInt($rootScope.pageViewNum) + 1;

            // Insert incremented value in database
            $http.post(
                "./php/page_visits.php",
                {'visit_count': $rootScope.pageViewNumInc}
            ).then(function(data){
                }, function(error) {
                    console.log("Failed to insert page visit value in database!");
            });
            
        }, function(error) {
            console.log("Failed to display page visit value!");
        });
    });
}])

;
}(angular));