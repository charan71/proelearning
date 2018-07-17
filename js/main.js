/* Initialize AOS */

jQuery(document).ready(function () {
	/* Navbar Auto-Collapse In Responsive Mode */
	$(".navbar-nav li a").click(function(event) {
		$(".navbar-collapse").collapse("hide");
	});
	
    /* Registration Tabs 
    $("#register-tabs a").click(function (e) {
        e.preventDefault()
        $(this).tab("show")
    });*/
	
	/* Testimonials Slider Customized Options */
	
    
	/* Dropdown Hover 
	$(".dropdown").mouseenter(function()
	{
		$(this).addClass("open");
	});
	$(".dropdown").mouseleave(function()
	{
		$(this).removeClass("open");
	});*/
	
	
	$(window).on("scroll", function () {
		/* Navbar Resize On Scroll */
		if ($(document).scrollTop() > 0) {
			$("header").addClass("small-nav");
			$(".dummy").removeClass("dummy-lg");
			$(".dummy").addClass("dummy-sm");
		} else {
			$("header").removeClass("small-nav");
			$(".dummy").removeClass("dummy-sm");
			$(".dummy").addClass("dummy-lg");
		}
		
		/* Bottom to Top Button Display On Scroll */
		if ($(document).scrollTop() > 100) {
			$(".bottom-to-top").css("display", "block");
		} else {
			$(".bottom-to-top").css("display", "none");
		}
	});
	
	/* Dynamic Breadcrumbs 
	$(".items a").on("click",function(){
		var $this = $(this),
			$bc = $("<div class='item'></div>");
		
		$this.parents("li").each(function(n, li){
			var $a = $(li).children("a").clone();
			$bc.prepend(" / ",$a);
		});
		$(".breadcrumb").html($bc.prepend("<a href='#!home'>Home</a>"));
		return false;
	});
	*/
    
    

});






















