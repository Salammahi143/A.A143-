(function($) {
    'use strict';
    $(window).on('scroll',function() { 
		if ($(this).scrollTop() > 120){  
			$('.nav-area').addClass("is-sticky");
		}
		else{
			$('.nav-area').removeClass("is-sticky");
		}
	});

    // Banner Slider
    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
    });
    
})($);
$(function(){
    // Scroll Event
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });  
    // Click Event
    $('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  500);
    });
    var wow = new WOW(
		{
		   animateClass: 'animated',
		   offset: 100,
		   mobile: true
		}
	   );
	   wow.init();

       
    $('#black').click(function(){
		$(':root').css('--mainColor', 'black');
        $(':root').css('--blackColor', 'white');
	});
    $('#pink').click(function(){
		$(':root').css('--mainColor', 'pink');
	});
    $('#gold').click(function(){
		$(':root').css('--mainColor', 'gold');
	});
    $('#lime').click(function(){
		$(':root').css('--mainColor', 'lime');
	});
});
