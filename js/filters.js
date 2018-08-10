(function() {
    "use strict";

    angular.module('ProELearning.filters', [])
    .filter('currencyWithLocale', function(currencyFilter, $sce) {
        return function(input, locale) {
            locale = locale || {currency: '$'};
            return $sce.trustAsHtml(currencyFilter(input, locale.currency));
        }
    })
    
    ;
}(angular));