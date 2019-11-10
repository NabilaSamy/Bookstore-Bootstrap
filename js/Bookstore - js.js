/* global $, alert, console */

$(function(){
	'use strict';
	
	// Trigger Nice Scroll
	$("html").niceScroll({
		railpadding: {top: 58, right: 0, left: 0, bottom: -60},
		cursorcolor: '#888',
		cursorwidth: '8',
		cursorborder: '1px solid #888',
		cursorborderradius: 8
	});
	
	// Making a Button to scroll to top
	var scrollButtonTop = $("#scroll_top");
	$(window).scroll(function(){if($(this).scrollTop() >= 700){scrollButtonTop.show();} else{scrollButtonTop.hide();}});
	// Scrolling to Top
	scrollButtonTop.click(function(){$("html, body").animate({scrollTop: 0}, 600);});
	
	/*// Deal with scrolling and header
	$(window).scroll(function(){
		var navbar = $('.navbar');
		window.console.log(navbar.height());
		window.console.log($(window).scrollTop());
		if($(window).scrollTop() >= navbar.height()){
			navbar.addClass('scrolled');
		} else{
			navbar.removeClass('scrolled');
		}
	});*/
	
	// Dealing with Tabs
	$('.tab-switch li').click(function(){
		// Add Selected Class to active link
		$(this).addClass('selected').siblings().removeClass('selected');
		// Hide All Divs
		$('.tabs .tabs-content > div').hide();
		// Show All Divs connected with this link
		$('.' + $(this).data('class')).show();
		//window.console.log($(this).data('class'));
	});
});


// Loading Website
$(window).on('load', function(){
	"use strict";
	$(".loading .spinner").fadeOut("slow", function(){
		$(this).parent().fadeOut(1000, function(){
			$("body").css("overflow", "auto");
			$(this).remove();
		});
	});
});
