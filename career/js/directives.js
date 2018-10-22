(function() {
    "use strict";

    angular.module('directives', [])

    /*-- File Upload Directive --*/
    .directive('fileInput', ['$parse', function($parse) {
    	return {
    		restrict: 'A',
    		link: function(scope, elem, attrs) {
    			elem.bind('change', function() { 
    				$parse(attrs.fileInput).assign(scope, elem[0].files);
    				scope.$apply();
    			});
    		}
    	}
	}])
	
	// Converting String to Number
	.directive('stringToNumber', function() {
		return {
			require: 'ngModel',
			link: function(scope, element, attrs, ngModel) {
				ngModel.$parsers.push(function(value) {
					return '' + value;
				});
				ngModel.$formatters.push(function(value) {
					return parseFloat(value);
				});
			}
		};
	})

;
}(angular));