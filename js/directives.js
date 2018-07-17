angular.module('ProELearning.directives', [])

/*-- OwlCarousel Directives --*/
.directive('owlCarousel', [ '$timeout', function($timeout) {
  return {
    restrict: 'E',
    transclude: false,
    link: function (scope, element) {
      var defaultOptions = {
          loop: false,
          nav: true,
          margin: 10,
          pagination: false,
          navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
          dots: false,
          navSpeed: 300,
          responsiveClass: true,
          responsive: {
              0: {
                  items: 1
              },
              501: {
                  items: 2
              },
              731: {
                  items: 2
              },
              769: {
                  items: 3
              },
              993: {
                  items: 4
              },
              1201: {
                  items: 5
              },
              1441: {
                  items: 6
              }
        }
      };
      scope.initCarousel = function(element) {
/*
         provide any default options you want

        var customOptions = scope.$eval(jQuery(element).attr('data-options'));
         combine the two options objects
        for(var key in customOptions) {
          defaultOptions[key] = customOptions[key];
        }
         init carousel
         jQuery(element).owlCarousel(defaultOptions);
*/
      };
      // scope.$on('owlCarouselLoaded', function() {
        $timeout(function(){
          jQuery(element).owlCarousel(defaultOptions)
          scope.initCarousel();
        }, 0, false);
      // });
    }
  };
}])

/*
.directive('owlCarouselItem', [function() {
  return {
    restrict: 'A',
    transclude: false,
    link: function(scope, element) {
      // wait for the last item in the ng-repeat then call init
      if(scope.$last) {
        scope.initCarousel(element.parent());
      }
    }
  };
}])
*/
/*-- //OwlCarousel Directives --*/

/*-- Bootstrap Tabs Directive --*/
.directive('showTab',
    function () {
        return {
            link: function (scope, element, attrs) {
                element.on("click", function(e) {
                    e.preventDefault();
                    $(element).tab('show');
            });
        }
    };
})
/*-- //Bootstrap Tabs Directive --*/

/*-- Modal Directive --*/
.directive('modal', function Directive(ModalService) {
    return {
        link: function (scope, element, attrs) {
            // ensure id attribute exists
            if (!attrs.id) {
                console.error('Modal must have an ID.');
                return;
            }
            // move element to bottom of page (just before </body>) so it can be displayed above everything else
            //element.appendTo('body');
            // add self (this modal instance) to the modal service so it's accessible from controllers
            var modal = {
                id: attrs.id,
                open: Open,
            };
            ModalService.Add(modal);
            
            // remove self from modal service when directive is destroyed
            scope.$on('$destroy', function() {
                ModalService.Remove(attrs.id);
                element.remove();
            });                
            // open modal
            function Open() {
                element.show();
                $('body').addClass('modal-open');
            }
        }
    };
})
/*-- //Modal Directive --*/

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


;
