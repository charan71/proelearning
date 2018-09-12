(function() {
	"use strict";
	/* Initialize AOS */

jQuery(document).ready(function () {
	/*-- Navbar Auto-Collapse In Responsive Mode --*/
	// $(".navbar-nav li a").click(function(event) {
	// 	$(".navbar-collapse").collapse("hide");
	// });
	
	$(window).on("scroll", function () {
		/*-- Bottom to Top Button Show/Hide On Scroll --*/
		if ($(document).scrollTop() > 400) {
			$(".bottom-to-top").css("transform", "scale(1,1)");
		} else {
			$(".bottom-to-top").css("transform", "scale(0,0)");
		}

		/*-- Bottom Bar Show/Hide on Scroll --*/
		if ($(document).scrollTop() > 50) {
			$(".bottom-bar").css("bottom","0");
		} else {
			$(".bottom-bar").css("bottom","-41px");
		}
	});    
    

});
}(jQuery));