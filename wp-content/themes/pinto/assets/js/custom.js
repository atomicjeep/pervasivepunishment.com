// IF JS IS ENABLED, REMOVE 'no-js' AND ADD 'js' CLASS
jQuery('html').removeClass('no-js').addClass('js');

jQuery(document).ready(function($) {
	
	//IE SIDEBAR TOGGLE SPECIFIC
	var $browserMSIE = $.browser.msie;
	var $browserVersion = parseInt($.browser.version, 10);
	
	if ($browserMSIE && $browserVersion === 8 || $browserMSIE && $browserVersion === 9) {
	$(document).on("click", '.ie .sidebar-btn' , function(){ 
		if ($('#theme-wrapper').hasClass('ie-side-menu')) {
			$('#theme-wrapper').removeClass('ie-side-menu');
		 	$('.hidden-sidebar').css('display','none').css('z-index','-1');
		 	$('.menu-icon').removeClass('close');
		 } else {
		 	$('#theme-wrapper').addClass('ie-side-menu');
		 	$('.hidden-sidebar').css('display','block').css('z-index','99');
		 	$('.menu-icon').addClass('close');
		} 
	 });
	} else {}
	//IE CLOSE 
	$(document).on("click", '.ie .close-btn' , function(){ 
		$('#theme-wrapper').removeClass('ie-side-menu');
		$('.hidden-sidebar').css('display','none').css('z-index','-1');
	});
	//END IE 
	
	//DROPDOWNS - SUPERFISH
	$('#primary-nav > ul')
		.superfish({
			delay: 200,
			animation: {opacity:'show', height:'show'},
			speed: 'fast',
			disableHI: true,
			cssArrows: false,
		});
		
	//STICKY NAV - WAYPOINTS	
	$('#primary-nav').waypoint('sticky');
		
	//FITVID
	jQuery("body").fitVids();
	
	//AUTOHEIGHT TEXTAREA
	jQuery('textarea.auto-height').flexText();
	  
  	//FORM VALIDATION
	if (jQuery().validate) { jQuery("#commentform").validate(); } 
	
	//BACK TO TOP
	jQuery().UItoTop({ 
		text: '',
	});

	//SLIDER CONTROL HOVERS - GALLERY POST FORMAT       
	$('.slider-wrapper').hover(	
		function(){  
			$('.bean-prev').addClass('animated SliderControlLeft');
			$('.bean-next').addClass('animated SliderControlRight');
			$('.bean-direction-nav a').css('opacity','1');
		},
		function(){ 
			$('.bean-prev').removeClass('animated SliderControlLeft');
			$('.bean-next').removeClass('animated SliderControlRight'); 
			$(".bean-direction-nav a").fadeTo(500,0);
		}
	);
  		
  	//RIGHT SIDEBAR MAIN
  	
	//CLICK EVENTS
	var ua = navigator.userAgent,
    	clickevent = (ua.match(/iPad/i) || ua.match(/iPhone/i) || ua.match(/Android/i)) ? "touchstart" : "click";
   	    console.log(clickevent);
   	    
	//MENU BUTTON TRIGGER
	$(document).on(clickevent, 'a.sidebar-btn', function(event){
	event.preventDefault();
		if ($('#theme-wrapper').hasClass('side-menu')) {
		  closeMenu();
		} else {
		  openMenu();
		}
	});  
	  
	// MOBILE CLOSE 
	$(document).on(clickevent, '.close-btn', function(event){
	  event.preventDefault();
	  closeMenu();
	});
	 
	//OPEN
	function openMenu(){
	 	$('.hidden-sidebar').css('display','block');
	 	$('.menu-icon').addClass('close');
	 	$('#toTop').addClass('hide');
	 	$('#theme-wrapper').addClass('side-menu');
	 	$('.safari #theme-wrapper').addClass('no-flick');
	 	$('.safari #header-container').addClass('no-flick');
	 	setTimeout(function(){$('.hidden-sidebar').css('z-index','0');},400);
	}
	
	//CLOSE 
	function closeMenu(){
		$('.hidden-sidebar').css('z-index','-1');
		$('.menu-icon').removeClass('close');
		$('#toTop').removeClass('hide');
	    $('#theme-wrapper').removeClass('side-menu');
	    $('.safari #theme-wrapper').removeClass('no-flick');
	    $('.safari #header-container').removeClass('no-flick');
		setTimeout(function(){ $('.hidden-sidebar').css('z-index','-1'); },400);
	 }
});