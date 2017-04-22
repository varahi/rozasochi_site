jQuery(document).ready(function() {
// Diasble right click menu
    //$(this).bind("contextmenu", function(e) {
    //    e.preventDefault();
    //});	
	
// Mask for input phones
   $("#powermail_field_phone").mask("+7(999) 999-9999");	
			
// Bootstrap tooltips
	$('body').tooltip({
  	selector: "[rel=tooltip]",
    placement: "top"
   });
   
// To Top	
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		    } else {
		      $('#toTop').fadeOut();
		    }
	});   	
   
//Table
	$("tr:first").addClass("table-th");
	$( "tr:odd" ).addClass("tr-odd");
	$( "tr:even" ).addClass("tr-even"); 
	

// Hide blocks
	$('.title').append('<span></span>');
		$('.post span').each(function() {
			var trigger = $(this), state = false, el = trigger.parent().next('.entry');
			trigger.click(function(){
				state = !state;
				el.slideToggle();
				trigger.parent().parent().toggleClass('inactive');
			});
		});	 
		
		
// Top and bottom arrows		
				var $elem = $('.content');
				
				$('#nav_up').fadeIn('slow');
				$('#nav_down').fadeIn('slow');  
				
				$(window).bind('scrollstart', function(){
					$('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
				});
				$(window).bind('scrollstop', function(){
					$('#nav_up,#nav_down').stop().animate({'opacity':'1'});
				});
				
				$('#nav_down').click(
					function (e) {
						$('html, body').animate({scrollTop: $elem.height()}, 800);
					}
				);
				$('#nav_up').click(
					function (e) {
						$('html, body').animate({scrollTop: '0px'}, 800);
					}
				);		 

}); 

//SmartMenus init
$(function() {
  $('#main-menu').smartmenus({
    subMenusSubOffsetX: 1,
    subMenusSubOffsetY: -8
  });
});

// SmartMenus mobile menu toggle button
$(function() {
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});

// Slick Slider

$('.slider').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: false,
 	asNavFor: '.slider-nav-thumbnails',
 });

 $('.slider-nav-thumbnails').slick({
 	slidesToShow: 5,
 	slidesToScroll: 1,
 	asNavFor: '.slider',
 	dots: true,
 	focusOnSelect: true
 });

 // Remove active class from all thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

 // Set active class to first thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

smoothScroll.init();

//Sticky mmenu
//$(window).load(function(){
//	$(".mmenu-link a").sticky({ topSpacing: 10 });
// });