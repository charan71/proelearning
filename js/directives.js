angular.module('ProELearning.directives', [])

/*-- OwlCarousel Directives --*/
.directive('owlCarousel', [ '$timeout', function($timeout) {
  return {
    restrict: 'E',
    transclude: false,
    link: function (scope, element) {
        var defaultOptions = {
            loop: false,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 2000,
            nav: true,
            rewind: true,
            margin: 20,
            navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
            dots: false,
            navSpeed: 300,
            owl2row: true, // enable plugin
            owl2rowTarget: 'item', // class for items in carousel div
            owl2rowContainer: 'owl2row-item', // class for items container
            owl2rowDirection: 'utd', // ltr
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
                    items: 4
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
*/
        //  init carousel
         jQuery(element).owlCarousel(defaultOptions);
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

.directive('owlCarouselTestimonials', [ '$timeout', function($timeout) {
  return {
    restrict: 'E',
    transclude: false,
    link: function (scope, element) {
      var defaultOptions = {
          loop: false,
          autoplay: true,
          autoplayHoverPause: true,
          autoplayTimeout: 2000,
          nav: false,
          rewind: true,
          margin: 0,
          navSpeed: 300,
          items: 1,
      };
      scope.initCarousel = function(element) {
/*
         provide any default options you want

        var customOptions = scope.$eval(jQuery(element).attr('data-options'));
         combine the two options objects
        for(var key in customOptions) {
          defaultOptions[key] = customOptions[key];
        }
*/
        //  init carousel
         jQuery(element).owlCarousel(defaultOptions);
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
/*-- //File Upload Directive --*/
.directive('animateNumbers',function ($timeout) {
    return {
        restrict: 'A',
        replace: false,
        scope: true,
        link: function (scope, element, attrs) {
            var e = element[0];
            var refreshInterval = 30;
            var duration = 1000; //milliseconds
            var number = parseInt(e.innerText);
            var step = 0;
            var num = 0;
            var steps = Math.ceil(duration / refreshInterval);
            var increment = (number / steps);
            var percentCompleted = 0;
            var lastNumberSlowCount = 3;
            if(number > lastNumberSlowCount){
                number = number - lastNumberSlowCount;
            }
            scope.timoutId = null;
            var counter = function () {
                scope.timoutId = $timeout(function () {
                    num += increment;
                    percentCompleted = Math.round((num/number) * 100);
                    if(percentCompleted > 60 && percentCompleted < 80){
                        refreshInterval = refreshInterval + 10;
                    }
                    else if (percentCompleted > 90){
                        refreshInterval = 200;
                    }
                    step++;
                    if (step >= steps) {
                        $timeout.cancel(scope.timoutId);
                        num = number;
                        e.textContent = number;
                        if(number > lastNumberSlowCount){
                            slowCounter();
                        }
                    } else {
                        e.textContent = Math.round(num);
                        counter();
                    }
                }, refreshInterval);
            }
            var slowCounter = function(){
                scope.timoutId = $timeout(function () {
                    lastNumberSlowCount --;
                    if(lastNumberSlowCount  < 0){
                        $timeout.cancel(scope.timoutId);
                    }
                    else {
                        number++;
                        e.textContent = number;
                        slowCounter();
                    }
                }, 300)
            }
            counter();
            return true;
        }
    }
})
/*-- Number Counter Directive --*/

/*-- Tooltips --*/
.directive('toggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            if (attrs.toggle == "tooltip") {
                $(element).tooltip();
            }
            if (attrs.toggle == "popover") {
                $(element).popover();
            }
        }
    }
})
/*-- //Tooltips --*/

/*-- Disable Cut, Copy, Paste --*/
.directive("disableContextmenuCutCopyPaste", function() {
    return {
        restrict: 'A',
        scope: {},
        link: function(scope, element) {
            element.on('cut copy paste contextmenu', function(event) {
                event.preventDefault();
            });
        }
    };
})

/*-- Slidable Content --*/
.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow': 'hidden',
                    'height': '150px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target = document.querySelector(attrs.slideToggle);
            attrs.expanded = false;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    var y = content.clientHeight + 40;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '150px';
                }
                attrs.expanded = !attrs.expanded;
            });
        }
    }
})

;
